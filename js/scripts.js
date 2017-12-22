class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            results: [],
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        }
    }
    reset() {
        this.setState({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        });
    }
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
    lap() {
        this.setState({
            results: [...this.state.results, this.format(this.state.times)]
        });
    }
    cleanLap() {
        this.setState({
            results: []
        });
    }
    render() {
        return (
            <div className="container">
                <nav className="controls">
                    <button id="start" onClick={() => this.start()} className="button">Start</button>
                    <button id="stop" onClick={() => this.stop()} className="button">Stop</button>
                    <button id="reset" onClick={() => this.reset()} className="button">Reset</button>
                    <button id="lap" onClick={() => this.lap()} className="button">Lap</button>
                    <button id="cleanLap" onClick={() => this.cleanLap()} className="button">Clean Lap</button>
                </nav>
                <p>{this.format(this.state.times)}</p>
                <div><Results list={this.state.results} /></div>
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

class Results extends React.Component {
	constructor(props) {
        super(props);
        list: []
	}

	render() {
		const listItems = this.props.list.map( (item) => <li key={item}>{item}</li> );
		return (
			<ul className='results'>{listItems}</ul>
		);
	}
}

ReactDOM.render(<Stopwatch />, document.getElementById('app')); 