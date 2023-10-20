import './FileUploader.css';

const FileUploader = ({fileUploaded, loadFile}) => {
  return (
    <>
      <label htmlFor="fileUploader">Load JSON</label>
      <input type="file" accept=".json" value={fileUploaded} onChange={e => loadFile(e)} name="fileUploader" id="fileUploader" />
    </>
  )
}

export default FileUploader;