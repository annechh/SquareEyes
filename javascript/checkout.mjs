

function createHtmlForMovie(movie) {
    const cartListMovies = document.createElement('div');
        cartListMovies.classList.add('cart-list');

    const imgStyleContainer = document.createElement('div');
        imgStyleContainer.classList.add('imgStyleContainer');

    const infoStyleContainer = document.createElement('div');
        infoStyleContainer.classList.add('infoStyleContainer');

    const movieImgInCart = document.createElement('img');
        movieImgInCart.src = movie.image.url;
        movieImgInCart.classList.add('img-in-cart');

    const movieInCart = document.createElement('div');
        movieInCart.classList.add('movie-in-cart');

    const movieTitle = document.createElement('div');
        movieTitle.textContent = movie.title;
        movieTitle.classList.add('cartTitle');

    const movieQuantity = document.createElement('div');
        movieQuantity.textContent = movie.quantity;
        movieQuantity.classList.add('cartInfo');

    const moviePrice = document.createElement('div');
        moviePrice.textContent = movie.price;
        moviePrice.classList.add('cartInfo');

    const totalPriceMovie = document.createElement('div');
        totalPriceMovie.textContent = movie.price * movie.quantity;
        totalPriceMovie.classList.add('cartInfo');

        cartListMovies.append(imgStyleContainer, infoStyleContainer);
        imgStyleContainer.appendChild(movieImgInCart);
        infoStyleContainer.append(movieInCart, movieTitle, movieQuantity, moviePrice, totalPriceMovie);
    return cartListMovies;
}

function displayCartMovies(){
    const displayCartContainer = document.getElementById('cartContainer');
    const cart = JSON.parse(localStorage.getItem('cart'));

    cart.forEach((currentMovie) => {
        const movieHtml = createHtmlForMovie(currentMovie)
        displayCartContainer.appendChild(movieHtml);
    })
}


function mainCart() {
    displayCartMovies();
}

mainCart();



