import { type ReactNode } from "react";

type MainPanelProps = {
  children?: ReactNode;
}

const MainPanel = ({ children }: MainPanelProps) => {
  return (
    <div className="flex-1 h-full bg-[#191919] overflow-auto">
      <div className="h-full flex items-center justify-center p-6 transition-all duration-300">
        {children || (
          <div className="text-center text-muted-foreground max-w-md">
            <h2 className="text-xl font-semibold mb-2">No file is open</h2>
            <p className="text-sm font-medium mb-6">Create a new note or select an existing one to begin</p>
            
            <div className="flex flex-col gap-2 text-sm">
              <button className="font-semibold text-primary/80 hover:text-primary hover:underline">
                Create new note
              </button>
              <button className="font-semibold text-primary/80 hover:text-primary hover:underline">
                Go to file
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPanel; 