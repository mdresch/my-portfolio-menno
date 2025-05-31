"use client";

import { useRef, useEffect } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  height?: string;
}

export default function MarkdownEditor({ value, onChange, height = "300px" }: MarkdownEditorProps) {
  const editorRef = useRef<Editor>(null);
  
  useEffect(() => {
    // Initialize with value if provided
    if (editorRef.current && value && !editorRef.current.getInstance().getMarkdown()) {
      editorRef.current.getInstance().setMarkdown(value);
    }
  }, [value]);
  
  const handleChange = () => {
    if (editorRef.current) {
      const markdown = editorRef.current.getInstance().getMarkdown();
      onChange(markdown);
    }
  };
  
  return (
    <Editor
      ref={editorRef}
      initialValue={value}
      previewStyle="vertical"
      height={height}
      initialEditType="markdown"
      useCommandShortcut={true}
      onChange={handleChange}
      toolbarItems={[
        ["heading", "bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol", "task", "indent", "outdent"],
        ["table", "image", "link"],
        ["code", "codeblock"],
      ]}
    />
  );
}