// 1. Get the data
// 2. Loop trough the data
// 3. Create HTML
// 4. Append the HTML to the document

import { API_MOVIE_URL, fetchMovieAPI } from "./fetch.mjs";
import { addGenreEventListener } from "./sortByGenre.mjs";
import { createCart, addToCart } from "./cart.mjs";


function createMovieHtml(movie) {
    // console.log(movie);
    // returns movie html

    let movieContainer = document.createElement('div');
        movieContainer.classList.add('movieContainer');  
        
    let movieImgContainer = document.createElement('div');
        movieImgContainer.classList.add('movieImgContainer');

    let movieImg = document.createElement('img');
        movieImg.classList.add('movie');
        movieImg.src = movie.image.url;
        movieImg.alt = movie.image.alt;
        movieImg.id = movie.id;
        movieImg.addEventListener('click', () => {
            localStorage.setItem('movie', JSON.stringify(movie));
            console.log('clicked', movieImg);
        })

    let linkToMovieInfoPage = document.createElement('a');
        linkToMovieInfoPage.href = 'html/movieinfo.html';
        linkToMovieInfoPage.classList.add('movie');

        // console.log(linkToMovieInfoPage);

    let priceAndAddContainer = document.createElement('div');
        priceAndAddContainer.classList.add('priceCartItems');
    
    let moviePrice = document.createElement('p');
        moviePrice.innerText = movie.price + ' Kr' ;
    
    let addToCartButton = document.createElement('button');
        addToCartButton.classList.add('fa-solid', 'fa-cart-shopping');
        addToCartButton.addEventListener('click', () => {
            console.log('clicked cart', movie.id);
            createCart();
            addToCart(movie);
        })

    let favoriteButton = document.createElement('button');
        favoriteButton.classList.add('fa-regular', 'fa-heart')
        
    
        movieImgContainer.append(linkToMovieInfoPage, priceAndAddContainer);
        linkToMovieInfoPage.appendChild(movieImg);
        priceAndAddContainer.append(moviePrice, favoriteButton, addToCartButton);
        movieContainer.appendChild(movieImgContainer);

    return movieContainer;
}



export function displayMovies(movies) {
    let displayMovieWrapper = document.getElementById('movieWrapper');
        displayMovieWrapper.innerHTML = '';
    // console.log(movies);
    movies.forEach((movieList) => {
        // generates movie html 
        let movieHtml = createMovieHtml(movieList);
        // console.log(movieHtml);
        displayMovieWrapper.appendChild(movieHtml);
        // createAddToCartButton(movies)
    })
    
}

async function main() {
    let movieData = await fetchMovieAPI(API_MOVIE_URL);
    let movies = movieData.data;
    
    displayMovies(movies);
    addGenreEventListener(movies);
    createCart();
}
main();








