import React from "react";
import './FileUploader.css';

const FileUploader = ({fileUploaded, loadFile}) => {
  return (
    <>
      <label htmlFor="fileUploader">Load JSON</label>
      <input type="file" value={fileUploaded} onChange={() => loadFile} name="fileUploader" id="fileUploader" />
    </>
  )
 
}

export default FileUploader;