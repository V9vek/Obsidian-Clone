import { type ReactNode } from "react";
import ToolBar from "./ToolBar";
import TabBar from "./TabBar";
import Sidebar from "./Sidebar";
import MainPanel from "./MainPanel";
import NoteEditor from "../notes/NoteEditor";
import { useNoteStore } from "@/store/noteStore";

type LayoutProps = {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const activeId = useNoteStore(state => state.activeId);

  return (
    <div className="flex h-screen w-screen bg-background text-foreground overflow-hidden">
      <ToolBar />
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TabBar />
        <div className="flex-1">
          {activeId ? <NoteEditor noteId={activeId} /> : <MainPanel>{children}</MainPanel>}
        </div>
      </div>
    </div>
  );
};

export default Layout; 