'use client';

import React from 'react';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import CodeMirror from '@uiw/react-codemirror';
import { markdown } from '@codemirror/lang-markdown';

interface CodeMirrorEditorProps {
  value: string;
  onChange: (value: string) => void;
}

/**
 * Wrapper component for CodeMirror editor to avoid runtime errors
 * with multiple instances of @codemirror/state
 */
const CodeMirrorEditor: React.FC<CodeMirrorEditorProps> = ({ value, onChange }) => {
  return (
    <CodeMirror
      value={value}
      height="500px"
      extensions={[markdown()]}
      onChange={onChange}
      theme="light"
      basicSetup={{
        lineNumbers: true,
        foldGutter: true,
        highlightActiveLine: true,
        autocompletion: true,
      }}
    />
  );
};

export default CodeMirrorEditor;
