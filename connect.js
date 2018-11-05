function Circle(props) {
  var style = {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "100%",
    paddingTop: "98%"
  };
  return React.createElement("div", { style: style });
}

function Cell(props) {
  var style = {
    height: 50,
    width: 50,
    border: "1px solid black",
    backgroundColor: "yellow"
  };
  return React.createElement(
    "div",
    { style: style },
    React.createElement(Circle, null)
  );
}

function Row(props) {
  var style = {
    display: "flex"
  };
  var cells = [];
  for (var i = 0; i < 7; i++) {
    cells.push(React.createElement(Cell, null));
  }
  return React.createElement(
    "div",
    { style: style },
    cells
  );
}

function Board(props) {
  var rows = [];
  for (var i = 5; i >= 0; i--) {
    rows.push(React.createElement(Row, null));
  }
  return React.createElement(
    "div",
    null,
    rows
  );
}

ReactDOM.render(React.createElement(Board, null), document.getElementById('root'));