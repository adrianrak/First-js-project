class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running = false,
            result =[],
            times = {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        }
        this.reset = this.reset.bind(this);
		this.start = this.start.bind(this);
        //this.display = display;
        this.results = this.results.bind(this);
        //this.reset();
        //this.print(this.times);
    }
    reset() {
        this.setState = {
            times = {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        };
    }
    // print() {
    //     this.display.innerText = this.format(this.times);
    // }
    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }
    start() {
        if (!this.state.running) {
            this.setState({running: true});
            this.watch = setInterval(() => this.step(), 10);
        }
    }
    step() {
        if (!this.state.running) return;
        this.calculate();
        //this.print();
    }
    calculate() {
        let countTime = this.state.times;

        countTime.miliseconds += 1;
        if (countTime.miliseconds >= 100) {
            countTime.seconds += 1;
            countTime.miliseconds = 0;
        }
        if (countTime.seconds >= 60) {
            countTime.minutes += 1;
            countTime.seconds = 0;
        }
        this.setState({ times: countTime })
    }
    stop() {
        this.setState({running: false});
        clearInterval(this.watch);
    }
    clean() {
        this.reset();
        this.stop();
        //this.print();
    }
    // list() {
    //     this.result.push(this.format(this.times));
    //     //this.printResult();
    // }
    // printResult() {
    //     this.results.innerText = '';
    //     let ul = document.createDocumentFragment();
    //     this.result.forEach((list) => {
    //         let li = document.createElement('li');
    //         li.innerHTML = list;
    //         ul.appendChild(li);
    //     });
    //     this.results.appendChild(ul);
    // }
    // cleanList() {
    //     this.result = [];
    //     this.printResult();
    // }
    render() {
        return (
            <div className="container">
                <nav className="controls">
                    <button id="start" onClick={this.start} className="button">Start</button>
                    <button id="stop" onClick={this.stop} className="button">Stop</button>
                    <button id="clean" onClick={this.clean} className="button">Clean</button>,
                </nav>
            </div>
        )
    
    }
}
function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}
// const stopwatch = new Stopwatch(
// document.querySelector('.stopwatch'),
// document.querySelector('.results'));

// let startButton = document.getElementById('start');
// startButton.addEventListener('click', () => stopwatch.start());

// let stopButton = document.getElementById('stop');
// stopButton.addEventListener('click', () => stopwatch.stop());

// let resetButton = document.getElementById('clean');
// resetButton.addEventListener('click', () => stopwatch.clean());

// let listButton = document.getElementById('list');
// listButton.addEventListener('click', () => stopwatch.list());

// let cleanListButton = document.getElementById('cleanList');
// cleanListButton.addEventListener('click', () => stopwatch.cleanList());

//var app = React.createElement(App);
//ReactDOM.render(<Stopwatch />, document.getElementById('app'));

ReactDOM.render(<Stopwatch/>, document.getElementById('app'));