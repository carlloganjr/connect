var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Game = function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    var cells = [];
    for (var i = 0; i < 6; i++) {
      cells.push(new Array(7).fill(0));
    }
    _this.state = { player: false, cells: cells, winner: 0 };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Game, [{
    key: "handleClick",
    value: function handleClick() {
      console.log("clicked");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Black's Turn"
        ),
        React.createElement(Board, null),
        React.createElement(
          "button",
          null,
          "Restart"
        )
      );
    }
  }]);

  return Game;
}(React.Component);

ReactDOM.render(React.createElement(Game, null), document.getElementById('root'));