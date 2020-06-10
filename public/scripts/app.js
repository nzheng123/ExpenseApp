"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.addOne = _this.addOne.bind(_this);
        _this.minusOne = _this.minusOne.bind(_this);
        _this.reset = _this.reset.bind(_this);
        _this.state = {
            counter: 0
        };

        return _this;
    }

    _createClass(Counter, [{
        key: "addOne",
        value: function addOne() {
            this.setState(function (prevState) {
                return {
                    counter: prevState.counter + 1
                };
            });
        }
    }, {
        key: "reset",
        value: function reset() {
            this.setState(function () {
                return {
                    counter: 0
                };
            });
        }
    }, {
        key: "minusOne",
        value: function minusOne() {
            this.setState(function (prevState1) {
                return {
                    counter: prevState1.counter - 1
                };
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var json = localStorage.getItem("counter");
            var counter = parseInt(json, 10);
            if (!isNaN(counter)) {
                console.log(counter);
                this.setState(function () {
                    return { counter: counter };
                });
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.counter != this.state.counter) {
                localStorage.setItem("counter", this.state.counter);
            }
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
                    "Counter:",
                    this.state.counter
                ),
                React.createElement(
                    "button",
                    { onClick: this.addOne },
                    "+1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.minusOne },
                    "-1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.reset },
                    "Reset"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById("app"));
