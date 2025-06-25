import { X } from "lucide-react";
import { useNoteStore } from "@/store/noteStore";

interface NoteTabProps {
  noteId: string;
}

const NoteTab = ({ noteId }: NoteTabProps) => {
  const { title } = useNoteStore((state) => state.notes[noteId]);
  const activeId = useNoteStore((state) => state.activeId);
  const switchTab = useNoteStore((state) => state.switchTab);
  const closeTab = useNoteStore((state) => state.closeTab);

  const isActive = activeId === noteId;

  return (
    <div
      className={`flex justify-between items-center px-3 h-full cursor-pointer select-none border-r border-border ${
        isActive ? "bg-[#303030]" : "bg-[#252525] hover:bg-[#2d2d2d]"
      } w-[180px]`}
      onClick={() => switchTab(noteId)}
    >
      <span className="text-sm mr-2 max-w-full truncate">{title}</span>
      <button
        className="opacity-60 hover:opacity-100"
        onClick={(e) => {
          e.stopPropagation();
          closeTab(noteId);
        }}
        aria-label="Close tab"
      >
        <X className="w-4 h-4 cursor-pointer" />
      </button>
    </div>
  );
};

export default NoteTab;
