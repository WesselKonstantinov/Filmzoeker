// Filteren op laatste films (2014 of nieuwer) => filteren op year en
// checken dat het movies.Year >= 2014

// Filteren op naam in de titel => een functie die de naam als argument neemt
// In de functie zelf wordt met behulp van includes op movies.Title gecheckt
// of de bewuste naam in de titel zit. Hierop gaan we filteren

/* 
    A function that creates a list element out of each movie and appends it 
    to the list of movies
*/
const addMoviesToDOM = movies => {
    const moviesList = document.querySelector('.site-main__movies-list');
    movies.forEach(movie => {
        const moviesListItem = document.createElement('li');
        moviesListItem.innerHTML = `<img src="${movie.Poster}">`;
        moviesList.appendChild(moviesListItem);
    })
};

addMoviesToDOM(movies);
