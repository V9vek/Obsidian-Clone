import {EditorView} from "@codemirror/view"
import {HighlightStyle, syntaxHighlighting} from "@codemirror/language"
import {tags as t} from "@lezer/highlight"

// Colors taken from Obsidian's default theme
const base00 = "#202020";  // Background
const base01 = "#282828";  // Selection bg
const base02 = "#383838";  // Line highlight bg
const base03 = "#626262";  // Comments
const base04 = "#949494";  // Subtle text
const base05 = "#d4d4d4";  // Main text
const base06 = "#e8e8e8";  // Headers
const base07 = "#f5f5f5";  // Bold text
const base08 = "#7f848e";  // Link brackets
const base09 = "#5dbcd2";  // Links
const base0A = "#8c8c8c";  // Italics
const base0B = "#7dcfff";  // Code
const base0C = "#89DDFF";  // Quotes
const base0D = "#8c8c8c";  // Checkbox
const base0E = "#bb9af7";  // Tags and wiki links
const base0F = "#b27ecd";  // Bold links

export const obsidianTheme = EditorView.theme({
  "&": {
    color: base05,
    backgroundColor: base00,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    fontSize: "14px",
    height: "100%",
  },
  ".cm-content": {
    caretColor: "#a6accd",
    lineHeight: "1.6",
    padding: "4px 0"
  },
  ".cm-gutters": {
    backgroundColor: base00,
    color: base03,
    border: "none"
  },
  ".cm-lineNumbers": {
    display: "none" // Obsidian doesn't show line numbers by default
  },
  ".cm-line": {
    padding: "0 10px"
  },
  ".cm-activeLine": {
    backgroundColor: "transparent" // Obsidian doesn't highlight active line
  },
  ".cm-activeLineGutter": {
    backgroundColor: "transparent"
  },
  ".cm-selectionMatch": {
    backgroundColor: "#4b4b4b"
  },
  "&.cm-focused .cm-cursor": {
    borderLeftColor: "#a6accd"
  },
  "&.cm-focused .cm-selectionBackground, ::selection": {
    backgroundColor: base01 + "80" // Semi-transparent
  },
  ".cm-searchMatch": {
    backgroundColor: "#72a1ff59",
    outline: "1px solid #457dff"
  },
  ".cm-searchMatch-selected": {
    backgroundColor: "#6199ff2f"
  },
  ".cm-selectionBackground": {
    background: base01 + "80"
  },
  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: base03
  },
  ".cm-tooltip": {
    backgroundColor: "#343434",
    border: "1px solid #272727",
    borderRadius: "4px"
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      backgroundColor: base02,
      color: base07
    }
  },
  // Styling for Markdown formatting
  ".cm-formatting": {
    color: base03
  },
  ".cm-formatting-header": {
    color: base0E,
    fontWeight: "bold"
  },
  // Custom styles for wiki links
  ".cm-wikilink": {
    color: base0E,
    borderBottom: "1px solid " + base0E + "50", // Subtle underline
  },
}, {dark: true});

export const obsidianHighlightStyle = HighlightStyle.define([
  {tag: t.heading, color: base06, fontWeight: "bold"},
  {tag: t.heading1, fontSize: "1.4em", fontWeight: "bold"},
  {tag: t.heading2, fontSize: "1.2em", fontWeight: "bold"},
  {tag: t.heading3, fontSize: "1.1em", fontWeight: "bold"},
  {tag: t.keyword, color: base0E},
  {tag: [t.atom, t.bool, t.url, t.contentSeparator, t.labelName], color: base09},
  {tag: [t.literal, t.inserted], color: base0B},
  {tag: [t.string, t.deleted], color: base08},
  {tag: [t.regexp, t.escape, t.special(t.string)], color: base0C},
  {tag: t.definition(t.variableName), color: base0A},
  {tag: t.local(t.variableName), color: base05},
  {tag: [t.typeName, t.namespace], color: base0D},
  {tag: t.className, color: base0D},
  {tag: [t.special(t.variableName), t.macroName], color: base0E},
  {tag: t.definition(t.propertyName), color: base0B},
  {tag: t.comment, color: base03, fontStyle: "italic"},
  {tag: t.meta, color: base03},
  {tag: t.strong, fontWeight: "bold", color: base07},
  {tag: t.emphasis, fontStyle: "italic", color: base0A},
  {tag: t.strikethrough, textDecoration: "line-through"},
  {tag: t.link, color: base08, textDecoration: "underline"},
  {tag: t.processingInstruction, color: base0E, fontWeight: "bold"}, // For wiki links
]);

export const obsidianSyntaxHighlighting = syntaxHighlighting(obsidianHighlightStyle);

export const obsidianExtensions = [
  obsidianTheme,
  obsidianSyntaxHighlighting
];