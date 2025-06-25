import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useNoteStore } from "@/store/noteStore";

const Sidebar = () => {
  const notesObj = useNoteStore(state => state.notes);
  const notes = Object.values(notesObj);
  const activeId = useNoteStore(state => state.activeId);
  const switchTab = useNoteStore(state => state.switchTab);
  const createNote = useNoteStore(state => state.createNote);

  return (
    <div className="w-64 h-full bg-[#1e1e1e] border-r border-border flex flex-col">
      <div className="p-4 border-b border-border">
        <h1 className="text-lg font-semibold text-foreground">Notes</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {notes.length === 0 && (
          <div className="py-2 px-1 text-sm text-muted-foreground">No notes yet</div>
        )}

        {notes.map(n => (
          <button
            key={n.id}
            className={`w-full text-left px-2 py-[3px] rounded-sm text-sm truncate ${
              n.id === activeId ? "bg-[#2d2d2d] text-foreground" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            }`}
            onClick={() => switchTab(n.id)}
          >
            {n.title || "Untitled"}
          </button>
        ))}
      </div>
      
      {/* bottom actions can be added here later */}
    </div>
  );
};

export default Sidebar; 