class Stopwatch {
    constructor(display, results) {
        this.running = false;
        this.display = display;
        this.results = results;
        this.reset();
        this.print(this.times);
        this.result =[];
    }
    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }
    print() {
        this.display.innerText = this.format(this.times);
    }
    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }
    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }
    step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }
    calculate() {
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }
    stop() {
        this.running = false;
        clearInterval(this.watch);
    }
    clean() {
        this.reset();
        this.print();
    }
    list() {
        this.result.push(this.format(this.times));
        this.printResult();
    }
    printResult() {
        this.results.innerText = '';
        let ul = document.createDocumentFragment();
        this.result.forEach((list) => {
            let li = document.createElement('li');
            li.innerHTML = list;
            ul.appendChild(li);
        });
        this.results.appendChild(ul);
    }
    cleanList() {
        this.result = [];
        this.printResult();
    }
    
}
function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}
const stopwatch = new Stopwatch(
document.querySelector('.stopwatch'),
document.querySelector('.results'));

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

let resetButton = document.getElementById('clean');
resetButton.addEventListener('click', () => stopwatch.clean());

let listButton = document.getElementById('list');
listButton.addEventListener('click', () => stopwatch.list());

let cleanListButton = document.getElementById('cleanList');
cleanListButton.addEventListener('click', () => stopwatch.cleanList());