// This function returns a URL based on the provided IMDB id
const getMovieLink = movieID => {
    const movieURL = `https://www.imdb.com/title/${movieID}/`;
    return movieURL;
}

// This function creates a list element out of each movie and appends it to the list of movies
const addMoviesToDOM = movies => {
    const moviesList = document.querySelector('#movies-list');

    // First remove previous movies from the list
    while (moviesList.firstChild) {
        moviesList.removeChild(moviesList.firstChild);
    };

    // Then add new movies according to the relevant movie category
    movies.forEach(movie => {
        const moviesListItem = document.createElement('li');
        const movieLink = getMovieLink(movie.imdbID);
        moviesListItem.innerHTML = `
            <a href="${movieLink}" target="_blank">
                <img src="${movie.Poster}" class="site-main__movie-poster" alt="Poster van de film ${movie.Title}">
            </a>
        `;
        moviesList.appendChild(moviesListItem);
    });
};

// This function filters movies by checking if a word is present in the movie title
const filterMovies = wordInMovieTitle => {
    const filteredMovies = movies.filter(movie => movie.Title.includes(wordInMovieTitle));
    addMoviesToDOM(filteredMovies);
};

// This function filters movies released in 2014 and later
const filterLatestMovies = () => {
    const filteredMovies = movies.filter(movie => Number(movie.Year) >= 2014);
    addMoviesToDOM(filteredMovies);
};

// Display all movies upon first visit to the site
addMoviesToDOM(movies);

// Attach an event handler to all radio buttons
const radioButtons = document.querySelectorAll('.site-nav__radio');
radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', e => {
        // Change display of movies based on the category that has been chosen
        const movieCategory = e.target.value;
        switch (movieCategory) {
            case 'all-movies':
                addMoviesToDOM(movies);
                break;
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