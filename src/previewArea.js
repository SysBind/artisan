import React, { Component } from 'react';
import './previewArea.css';

class PreviewArea extends Component {

  loaded() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      console.log(this.responseXML.title);

      let navbar = this.responseXML.querySelector('.navbar');

      console.log(document.querySelector('#previewStage').contentDocument.body);

      document.querySelector('#previewStage').contentDocument.body.appendChild(navbar)
    }

    xhr.open("GET", "http://localhost:8000");
    xhr.responseType = "document";
      xhr.send();
    }

  render() {
    return (
      <div>
      <h2> Preview </h2>
      <iframe id="previewStage" title="Preview Stage"></iframe>
      <iframe id="previewStageFull"  title="Full Preview Stage" src="http://localhost:8000" onLoad={this.loaded}>
      </iframe>
      </div>
    );
  }
}

export default PreviewArea;
