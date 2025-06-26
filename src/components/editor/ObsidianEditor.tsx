import { useEffect, useRef } from "react";
import { EditorView, keymap } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { markdown } from "@codemirror/lang-markdown";
import { defaultKeymap } from "@codemirror/commands";
import { obsidianExtensions } from "@/components/editor/ObsidianTheme";
import { useNoteStore } from "@/store/noteStore";

type Props = {
  noteId: string;
  onChange: (id: string, content: string) => void;
};

export default function ObsidianEditor({ noteId, onChange }: Props) {
  const note = useNoteStore((state) => state.notes[noteId]);
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);

  const fullText = `# ${note.title}\n${note.content}`;

  useEffect(() => {
    if (!editorRef.current) return;

    const state = EditorState.create({
      doc: fullText,
      extensions: [
        markdown(),
        keymap.of(defaultKeymap),
        EditorView.lineWrapping,
        EditorView.updateListener.of((v) => {
          if (v.docChanged) {
            const docText = v.state.doc.toString();
            const contentLines = docText.split("\n").slice(2);
            const body = contentLines.join("\n");
            onChange(noteId, body);
          }
        }),
        ...obsidianExtensions,
      ],
    });

    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    viewRef.current = view;

    return () => view.destroy();
  }, [noteId]);

  // 🔁 Handle title/content updates
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;

    const currentText = view.state.doc.toString();
    if (currentText !== fullText) {
      const transaction = view.state.update({
        changes: { from: 0, to: currentText.length, insert: fullText },
      });
      view.dispatch(transaction);
    }
  }, [note.title, note.content]);

  return <div ref={editorRef} className="obsidian-editor" />;
}
