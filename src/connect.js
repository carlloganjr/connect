function Circle(props) {
  var style = {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "100%",
    paddingTop: "98%"
  }
  return (
    <div style = {style}></div>
  )
}

function Cell(props) {
  var style = {
    height: 50,
    width: 50,
    border: "1px solid black",
    backgroundColor: "yellow"
  }
  return <div style = {style}>
            <Circle/>
         </div>
}

function Row(props) {
  var style = {
    display: "flex"
  }
  var cells = []
  for (let i = 0; i < 7; i++) {
    cells.push(<Cell/>)
  }
  return <div style = {style}>
            {cells}
         </div>
}

function Board(props) {
  var rows = []
  for (let i = 5; i >= 0; i--) {
    rows.push(<Row/>)
  }
  return <div>
            {rows}
         </div>
}

ReactDOM.render(
  <Board/>,
  document.getElementById('root')
)
