var movies = [
    {
      id: 1,  
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      src: "https://images.pexels.com/photos/395134/pexels-photo-395134.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      src: "https://images.pexels.com/photos/591216/pexels-photo-591216.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
    {
      id: 3,
      title: 'Shrek',
      desc: 'Film o zielonym ogrze',
      src: "https://images.pexels.com/photos/158780/leaf-nature-green-spring-158780.jpeg?auto=compress&cs=tinysrgb&h=350"

    }
  ];

  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img',{src: movie.src})
      );
  });

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
ReactDOM.render(element, document.getElementById('app'));