
var movies = [
    {
        id: 1,
        title: 'Ojciec Chrzestny',
        desc: 'Film o Vito Corleone',
        img: 'godfather.png'
    },
    {
        id: 2,
        title: 'Gwiezdne wojny',
        desc: 'Wiadomo :)',
        img: 'wars.png'
    },
    {
        id: 3,
        title: 'Piraci z karaibów',
        desc: 'Przygody kapitana Jacka Sparrowa',
        img: 'piraci.png'
    }
        
];
var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
         return (
            React.createElement('li', {},
                React.createElement(movieTitle, {
                    title: this.props.movie.title
                    
                }),
                React.createElement(movieDescription, {
                    desc: this.props.movie.desc
                }),
                React.createElement(movieImg, {
                    src: this.props.movie.img
                })
            )
         );
    },
    
});
var movieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)
        );
    }
});
var movieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        );
    }
});
var movieImg = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('img', {src: this.props.img})
        );
    }
});
var movieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function() {
        return (
            React.createElement('ul', {},  this.props.movies.map(function(movie) {
                return 
                    React.createElement(Movie, {key: movie.id, movie: movie});
            }))
        );
    }
});

var element =
  React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement(movieList, {movies: movies})
);

ReactDOM.render(element, document.getElementById('app'));