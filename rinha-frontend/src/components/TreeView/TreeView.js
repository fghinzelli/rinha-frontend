const TreeView = ({fileName, jsonData}) => {
  return (
    <section className="treeview">
      <h2>{fileName}</h2>
      { JSON.stringify(jsonData) }
    </section>
  )
}

export default TreeView;