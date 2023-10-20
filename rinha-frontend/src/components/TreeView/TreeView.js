const TreeView = ({ fileName, jsonData }) => {

  const Node = ({ level }) => {
    console.log(level)
    if (Array.isArray(level)) {
      return level.map(child => <Node level={child} />)
    } else {
      // return (
      //   Object.keys(level).map(k => {
      //     return (
      //       <>
      //         <span style={{ color: 'red', fontSize: '20px' }}>{k}:</span>
      //         { Array.isArray(level(k)) ? <Node key={level(k)} />: '[' } 
      //       </>
      //     )
      //   })
      // )
    }
  }

  return (
    <section className="treeview">
      <h2>{fileName}</h2>

      <Node level={jsonData} />
      {JSON.stringify(jsonData)}
    </section>
  )
}

export default TreeView;