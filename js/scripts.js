
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
var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img})
    );
});
var element =
React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement('ul', {}, moviesElements)
);
ReactDOM.render(element, document.getElementById('app'));