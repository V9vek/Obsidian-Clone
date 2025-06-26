import { type ReactNode } from "react";
import ToolBar from "./ToolBar";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import MainPanel from "./MainPanel";
import ObsidianEditor from "../editor/ObsidianEditor";
import { useNoteStore } from "@/store/noteStore";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const activeId = useNoteStore((state) => state.activeId);
  const updateNote = useNoteStore((state) => state.updateNote);

  return (
    <div className="flex h-screen w-screen bg-background text-foreground overflow-hidden">
      <ToolBar />
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TabBar />
        <div className="flex-1">
          {activeId ? (
            <ObsidianEditor
              noteId={activeId}
              onChange={updateNote}
            />
          ) : (
            <MainPanel>{children}</MainPanel>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
