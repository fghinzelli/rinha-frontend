import './App.css';
import FileUploader from './components/FileUploader/FileUploader';
import Header from './components/Header/Header';
import Message from './components/Message/Message';
import React, { useState } from 'react';

function App() {
  const [txtMessage, setTextMessage] = useState("");
  const [fileUploaded, setFileUploaded] = useState('');
  const [loading, setLoading] = useState(false);

  const loadFile = () => {
    setLoading(true)
    console.log(fileUploaded);
    console.log("Load File")
    setTimeout(() => setLoading(false), 3000)
  }

  return (
    <div className="App">
      <Header/>
      <FileUploader fileUploaded={fileUploaded} loadFile={loadFile}/>
      <Message txtMessage={txtMessage}/>
      {loading ? <span>Carregando...</span> : null}
    </div>
  );

  
}

export default App;
