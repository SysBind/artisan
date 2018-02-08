import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToolsArea from './toolsArea.js';
import PreviewArea from './previewArea.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToolsArea />
        <PreviewArea />
      </div>
    );
  }
}

export default App;
