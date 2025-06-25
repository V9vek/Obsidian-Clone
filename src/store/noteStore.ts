import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string; // ISO
  updatedAt: string; // ISO
};

type NoteStore = {
  notes: Record<string, Note>;
  openTabIds: string[]; // order of tabs
  activeId: string | null;
  // actions
  createNote: () => void;
  updateNote: (id: string, content: string) => void;
  switchTab: (id: string | null) => void;
  closeTab: (id: string) => void;
};

export const useNoteStore = create<NoteStore>()(
  persist(
    (set, get) => ({
      notes: {},
      openTabIds: [],
      activeId: null,
      createNote: () => {
        const id = nanoid();
        const now = new Date().toISOString();
        set(state => ({
          notes: {
            ...state.notes,
            [id]: { id, title: "Untitled", content: "", createdAt: now, updatedAt: now },
          },
          openTabIds: [...state.openTabIds, id],
          activeId: id,
        }));
      },
      updateNote: (id, content) => {
        const note = get().notes[id];
        if (!note) return;
        // derive title from first non-empty line of markdown
        const firstLine = content.split(/\r?\n/).find(line => line.trim().length > 0) ?? "Untitled";
        const title = firstLine.replace(/^#\s*/, "").slice(0, 64);
        const now = new Date().toISOString();
        set(state => ({
          notes: {
            ...state.notes,
            [id]: { ...note, content, title, updatedAt: now },
          },
        }));
      },
      switchTab: id => {
        set({ activeId: id });
        if (id && !get().openTabIds.includes(id)) {
          // if note already exists, push to tabs
          set(state => ({ openTabIds: [...state.openTabIds, id] }));
        }
      },
      closeTab: id => {
        const { openTabIds, notes, activeId } = get();
        const nextTabs = openTabIds.filter(tid => tid !== id);
        // If note content empty, delete it entirely
        const note = notes[id];
        const newNotes = { ...notes };
        if (note && note.content.trim() === "") {
          delete newNotes[id];
        }
        const newActive = activeId === id ? nextTabs[nextTabs.length - 1] ?? null : activeId;
        set({ openTabIds: nextTabs, activeId: newActive, notes: newNotes });
      },
    }),
    {
      name: "notes-store",
    }
  )
); 