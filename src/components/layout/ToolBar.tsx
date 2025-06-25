import { GitGraph, FileText, FileSearch } from "lucide-react";

const ToolBar = () => {
  return (
    <div className="w-12 h-full bg-[#151515] border-r border-border flex flex-col items-center py-4 space-y-4">
      <button
        aria-label="Graph view"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <GitGraph className="w-5 h-5" />
      </button>

      <button
        aria-label="Files"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <FileSearch className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ToolBar; 