import { useNoteStore } from "@/store/noteStore";

interface NoteEditorProps {
  noteId: string;
}

const NoteEditor = ({ noteId }: NoteEditorProps) => {
  const note = useNoteStore(state => state.notes[noteId]);
  const updateNote = useNoteStore(state => state.updateNote);

  if (!note) return null;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateNote(noteId, e.target.value);
  };

  return (
    <textarea
      className="w-full h-full bg-transparent outline-none p-4 resize-none font-mono text-sm"
      value={note.content}
      placeholder="# My new note..."
      onChange={handleChange}
    />
  );
};

export default NoteEditor; 