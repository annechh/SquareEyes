import { displayMovies } from "./script.mjs";

export function addGenreEventListener(movies) {
    let listOfGenre = document.getElementById('genreList').children;
    for(let genreListItem of listOfGenre) {
        genreListItem.addEventListener('click', () => {
            filterMoviesByGenre(movies, genreListItem.textContent);
        });
    }  
}

function filterMoviesByGenre(movies, genre){
let filteredMovies = movies.filter(movie => {
    let checkGenre = movie.genre === genre;
    if (genre === 'Show All')
        return true;
        return checkGenre;
    })
    displayMovies(filteredMovies);
}