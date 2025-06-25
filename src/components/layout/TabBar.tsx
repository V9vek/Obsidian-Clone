import { Plus } from "lucide-react";
import { useNoteStore } from "@/store/noteStore";
import NoteTab from "../notes/NoteTab";

const TabBar = () => {
  const openTabIds = useNoteStore(state => state.openTabIds);
  const createNote = useNoteStore(state => state.createNote);
  const switchTab = useNoteStore(state => state.switchTab);

  return (
    <div className="h-10 flex items-center bg-[#282828] border-b border-border select-none">
      {openTabIds.map(id => (
        <NoteTab key={id} noteId={id} />
      ))}
      {/* new tab button */}
      <button
        className="w-10 h-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-[#313131] border-r border-border"
        onClick={() => {
          createNote();
        }}
        aria-label="New tab"
      >
        <Plus className="w-4 h-4" />
      </button>
      {/* empty space to fill */}
      <div className="flex-1 h-full" />
    </div>
  );
};

export default TabBar; 