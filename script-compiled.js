"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
    _inherits(Stopwatch, _React$Component);

    function Stopwatch(props) {
        _classCallCheck(this, Stopwatch);

        var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, props));

        _this.state = {
            running: false,
            results: [],
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        };
        return _this;
    }

    _createClass(Stopwatch, [{
        key: "reset",
        value: function reset() {
            this.setState({
                times: {
                    minutes: 0,
                    seconds: 0,
                    miliseconds: 0
                }
            });
        }
    }, {
        key: "format",
        value: function format(times) {
            return pad0(times.minutes) + ":" + pad0(times.seconds) + ":" + pad0(Math.floor(times.miliseconds));
        }
    }, {
        key: "start",
        value: function start() {
            var _this2 = this;

            if (!this.state.running) {
                this.setState({ running: true });
                this.watch = setInterval(function () {
                    return _this2.step();
                }, 10);
            }
        }
    }, {
        key: "step",
        value: function step() {
            if (!this.state.running) return;
            this.calculate();
        }
    }, {
        key: "calculate",
        value: function calculate() {
            var countTime = this.state.times;

            countTime.miliseconds += 1;
            if (countTime.miliseconds >= 100) {
                countTime.seconds += 1;
                countTime.miliseconds = 0;
            }
            if (countTime.seconds >= 60) {
                countTime.minutes += 1;
                countTime.seconds = 0;
            }
            this.setState({ times: countTime });
        }
    }, {
        key: "stop",
        value: function stop() {
            this.setState({ running: false });
            clearInterval(this.watch);
        }
    }, {
        key: "lap",
        value: function lap() {
            this.setState({
                results: [].concat(_toConsumableArray(this.state.results), [this.format(this.state.times)])
            });
        }
    }, {
        key: "cleanLap",
        value: function cleanLap() {
            this.setState({
                results: []
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "nav",
                    { className: "controls" },
                    React.createElement(
                        "button",
                        { id: "start", onClick: function onClick() {
                                return _this3.start();
                            }, className: "button" },
                        "Start"
                    ),
                    React.createElement(
                        "button",
                        { id: "stop", onClick: function onClick() {
                                return _this3.stop();
                            }, className: "button" },
                        "Stop"
                    ),
                    React.createElement(
                        "button",
                        { id: "reset", onClick: function onClick() {
                                return _this3.reset();
                            }, className: "button" },
                        "Reset"
                    ),
                    React.createElement(
                        "button",
                        { id: "lap", onClick: function onClick() {
                                return _this3.lap();
                            }, className: "button" },
                        "Lap"
                    ),
                    React.createElement(
                        "button",
                        { id: "cleanLap", onClick: function onClick() {
                                return _this3.cleanLap();
                            }, className: "button" },
                        "Clean Lap"
                    )
                ),
                React.createElement(
                    "p",
                    null,
                    this.format(this.state.times)
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(Results, { list: this.state.results })
                )
            );
        }
    }]);

    return Stopwatch;
}(React.Component);

function pad0(value) {
    var result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

var Results = function (_React$Component2) {
    _inherits(Results, _React$Component2);

    function Results(props) {
        _classCallCheck(this, Results);

        var _this4 = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this, props));

        _this4.state = {
            list: []
        };
        return _this4;
    }

    _createClass(Results, [{
        key: "render",
        value: function render() {
            var listItems = this.props.list.map(function (item) {
                return React.createElement(
                    "li",
                    { key: item },
                    item
                );
            });
            return React.createElement(
                "ul",
                { className: "results" },
                listItems
            );
        }
    }]);

    return Results;
}(React.Component);

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementById('app'));
