import './App.css';
import FileUploader from './components/FileUploader/FileUploader';
import Header from './components/Header/Header';
import Message from './components/Message/Message';
import React, { useState } from 'react';
import TreeView from './components/TreeView/TreeView';

function App() {
  const [txtMessage, setTextMessage] = useState("");
  const [fileUploaded, setFileUploaded] = useState('');
  const [fileName, setFileName] = useState('');
  const [jsonError, setJsonError] = useState(false);
  const [jsonResult, setJsonResult] = useState(null);

  const loadFile = event => {
    toggleErrorMessage(false);
    let jsonFile = event.target.files[0];
    setFileName(jsonFile.name)
    if (jsonFile.type !== 'application/json') {
      toggleErrorMessage(true);
    }
    readJSON(jsonFile)
      .then(result => {
        setJsonResult(result);
      }).catch(error => {
        console.log("Error on load JSON: ", error)
        toggleErrorMessage(true)
      })
  }

  const toggleErrorMessage = showMessage => {
    setJsonError(showMessage);
    setTextMessage(showMessage ? 'Invalid file. Please load a valid JSON file.' : '')
  }

  const readJSON = jsonFile => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = event => {
        try {
          const jsonContent = JSON.parse(reader.result);
          resolve(jsonContent);
        } catch (err) {
          reject('JSON file seems malformed.');
        }
      };

      reader.onerror = error => {
        reject("File couldn't be read");
      };

      reader.readAsText(jsonFile);
    });
  }

  return (
    <div className="App">
      <Header />
      <main>
        <FileUploader fileUploaded={fileUploaded} loadFile={loadFile} />
        {jsonResult ? <TreeView fileName={fileName} jsonData={jsonResult} /> : null}
        {jsonError ? <Message txtMessage={txtMessage} /> : null}
      </main>
    </div>
  );


}

export default App;
