function Circle(props) {
  var color = "white"
  if(props.cell == 1){
      color = "black"
  }
  else if(props.cell == 2){
      color = "red"
  }
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
  return (
    <div style = {style} onClick = {() =>
      props.handleClick(props.row,props.col)}>
              <Circle cell = {props.cell}/>
           </div>
  )
}

function Row(props) {
  var style = {
    display: "flex"
  }
  var cells = []
  for (let i = 0; i < 7; i++) {
    cells.push(<Cell key = {i} cell = {props.cells[i]} row = {props.row}
      col = {i} handleClick = {props.handleClick}/>)
  }
  return (
    <div style = {style}>
              {cells}
           </div>
  )
}

function Board(props) {
  var rows = []
  for (let i = 5; i >= 0; i--) {
    rows.push(<Row key = {i} row = {i} cells = {props.cells[i]}
      handleClick = {props.handleClick}/>)
  }
  return <div>
            {rows}
         </div>
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    var cells = []
    for (let i = 0; i < 6; i++ ) {
    cells.push(new Array(7).fill(0))
    }
    this.state = {player:false,cells:cells,winner:0}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(row,col) {
    console.log("row: " + row + " | col: " + col)
    console.log(this.state.cells)
    var temp = [];
    for(let i = 0; i < 6; i++){
      temp.push(this.state.cells[i].slice())
    }
    temp[row][col] = 1;
    this.setState({cells:temp})
  }

  render() {
    return (
      <div>
        <h1>Black's Turn</h1>
        <Board cells = {this.state.cells} handleClick = {this.handleClick}/>
        <button>Restart</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
)
