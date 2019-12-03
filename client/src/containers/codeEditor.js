import React from 'react';
import SnippetEditor from '../components/editor';

const getSnippetFromPath = () => {
  const path = window.location.pathname.split('/editor/')[1];
  if(path) {
    return atob(path);
  }
};

const setPathFromSnippet = snippet => {
  const encodedSnippet = btoa(snippet);
  window.history.pushState({}, null, `/editor/${encodedSnippet}`);
}

const CodeEditorContainer = () => {
  const templateSnippet = getSnippetFromPath();
  return (
    <div>
      <h1>[input a fajl nevevel.valami(ami mar egy select)igen.]</h1>
      <SnippetEditor sampleCode={templateSnippet} onchange={setPathFromSnippet} />
    </div>
  );
}

export default CodeEditorContainer;
