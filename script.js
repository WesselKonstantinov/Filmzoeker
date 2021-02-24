// This function creates a list element out of each movie and appends it to the list of movies
const addMoviesToDOM = movies => {
    const moviesList = document.querySelector('#movies-list');
    movies.forEach(movie => {
        const newMoviesListItem = document.createElement('li');
        newMoviesListItem.innerHTML = `<img src="${movie.Poster}">`;
        moviesList.appendChild(newMoviesListItem);
    });
};

// This function filters movies by checking if a word is present in the movie title
const filterMovies = wordInMovieTitle => {
    const filteredMovies = movies.filter(movie => movie.Title.includes(wordInMovieTitle));
    addMoviesToDOM(filteredMovies);
};

// This function filters movies from 2014 and later
const filterLatestMovies = () => {
    const filteredMovies = movies.filter(movie => Number(movie.Year) >= 2014);
    addMoviesToDOM(filteredMovies);
};

// Attach an event handler to all radio buttons
const radioButtons = document.querySelectorAll('.site-nav__radio');
radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', e => {
        // Change display of movies based on the category that has been chosen
        const movieCategory = e.target.value;
        switch (movieCategory) {
            case 'latest-movies':
                filterLatestMovies();
                break;
            case 'avenger-movies':
                filterMovies('Avengers');
                break;
            case 'x-men-movies':
                filterMovies('X-Men');
                break;
            case 'princess-movies':
                filterMovies('Princess');
                break;
            case 'batman-movies':
                filterMovies('Batman');
                break;
        };
    });
});