import React, { useState } from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-xcode";

const sampleCode = 'const a = 5;';

const SnippetEditor = () => {
    return <AceEditor
      // mode="css"
      theme="xcode"
      fontSize={20}
      placeholder="type code here"
      onChange={() => {}}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      // value={sampleCode}
    />;
};

export default SnippetEditor;
