var CounterOne = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        });
    },

    componentWillMount: function() {
        console.log('componentWillMount: this is called before render');
    },

    componentDidMount: function() {
        console.log('componentDidMount: occurs after render()');
    },

    componentWillReceiveProps: function() {
        console.log('componentWillReceiveProps: updating the component properties');
    },

    shouldComponentUpdate: function() {
        console.log('shouldComponentUpdate: true/false');
        return true;
    },

    componentWillUpdate: function() {
        console.log('componentWillUpdate: if shouldComponentUpdate is true');
    },

    componentDidUpdate: function() {
        console.log('componentDidUpdate: DOM manipulations, like componentDidMount'); 
    },

    componentWillUnmount: function() {
        console.log('componentWillUnmount: cleaning');
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-')
        );
    }
});

var CounterTwo = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-')
        );
    }
});

var CounterThree = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-')
        );
    }
});

var element = React.createElement('div', {},
                React.createElement(CounterOne, {}),
                React.createElement(CounterTwo, {}),
                React.createElement(CounterThree, {})

            );
ReactDOM.render(element, document.getElementById('app'));