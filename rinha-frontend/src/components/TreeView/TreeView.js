import './TreeView.css'

const Node = ({ level }) => {

  if (level === null) {
    return 'null'
  } else if (Array.isArray(level)) {
    return level.map((child, i) => {
      return (
        <div className="array-group">
          <span className="array-index">{`${i}: `}</span>
          <Node level={child} />
        </div>
      )
    })
  } else if (typeof level === 'object') {
    return Object.keys(level).map(k => {
      let arrayIndicator = ((typeof level[k] === 'object' ) && level[k] !== null)
      return (
        <>
          <div className="array-children">
            <span className={`object-label ${arrayIndicator ? 'array-indicator-start' : ''}`}>{k}: </span>
            <Node level={level[k]} />
          </div>
          <div class={`${arrayIndicator ? 'array-indicator-end' : ''}`}></div>
        </>
      )
    })
  } else {
    return <span className="object-value">{level}</span>
  }
}

const TreeView = ({ fileName, jsonData }) => {

  return (
    <section className="treeview">
      <h2>{fileName}</h2>
      <Node level={jsonData} />
    </section>
  )
}

export default TreeView;