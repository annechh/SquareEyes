import { displayMovies } from "./script.mjs";

export async function addGenreEventListener(movies) {
    let listOfGenre = document.getElementById('genreList').children;
    console.log('list of genre:', listOfGenre.length);
    for(let genreListItem of listOfGenre) {
        console.log('Genre list item:', genreListItem);
        genreListItem.addEventListener('click', () => {
            filterMoviesByGenre(movies, genreListItem.textContent);
            console.log('clicked' );
        });
    }  
}

function filterMoviesByGenre(movies, genre){
    console.log('All movies:', movies);
let filteredMovies = movies.filter(movie => {
    let checkGenre = movie.genre === genre;
    if (genre === 'Show All')
        return true;
        return checkGenre;
    })
    displayMovies(filteredMovies);
}