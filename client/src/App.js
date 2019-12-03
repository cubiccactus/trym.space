import React from 'react';
import Form from './components/form';
import Header from './components/header';
import About from './containers/about';
import CodeEditorContainer from './containers/codeEditor';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" children={Form} />
          <Route exact path="/about" children={About} />
          <Route path="/editor/*" children={CodeEditorContainer} />
        </Switch>
    </Router>
  );
};

export default App;
