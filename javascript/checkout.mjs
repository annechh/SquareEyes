import { removeMovieFromCart, clearCart } from "./cart.mjs";


let clearCartButton = document.getElementById('clearCart');
    clearCartButton.addEventListener('click', () => {
        clearCart();
    })

function createHtmlForMovie(movie) {
    let cartListMovies = document.createElement('div');
        cartListMovies.classList.add('cart-list');
        cartListMovies.setAttribute('movie-id', movie.id)

    let imgContainer = document.createElement('div');
        imgContainer.classList.add('imgStyleContainer');

    let infoContainer = document.createElement('div');
        infoContainer.classList.add('infoStyleContainer');

    let movieImgInCart = document.createElement('img');
        movieImgInCart.src = movie.image.url;
        movieImgInCart.classList.add('img-in-cart');

    let movieInCart = document.createElement('div');
        movieInCart.classList.add('movie-in-cart');

    let movieTitle = document.createElement('div');
        movieTitle.textContent = movie.title;
        movieTitle.classList.add('cartTitle');

    let movieQuantity = document.createElement('div');
        movieQuantity.textContent = `Quantity: ${movie.quantity}`;
        movieQuantity.classList.add('cartInfo');

    let moviePrice = document.createElement('div');
        moviePrice.textContent = `Price: ${movie.price}`;
        moviePrice.classList.add('cartInfo');

    let movieSalePrice = document.createElement('div');
        movieSalePrice.textContent = `On Sale: ${movie.discountedPrice}`;
        movieSalePrice.classList.add('cartInfo');

    let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', removeMovieFromCart);

        cartListMovies.append(imgContainer, infoContainer);
        imgContainer.appendChild(movieImgInCart);
        infoContainer.append(
            movieInCart, 
            movieTitle, 
            moviePrice, 
            movieSalePrice, 
            movieQuantity, 
            removeButton);
        return cartListMovies;
}



let totalPrice = 0;
function displayTotalPrice(movie) {
    
    movie.forEach(movie => {
        totalPrice += movie.price * movie.quantity;
    });

    let formattedTotalPrice = formatCurrency(totalPrice);
    
    let displayTotalPrice = document.getElementById ('totalPriceCheckout');
        displayTotalPrice.textContent = `Total Price: ${formattedTotalPrice}`;
}


// gives two numbers of decimals
function formatCurrency(total) {
    return Math.round(total * 100) / 100;
}



function purchaseButtonHtml() {
    let buyButton = document.getElementById('buyButton');
        buyButton.classList.add('btn');

        buyButton.addEventListener('click', () => {
            let moviesInCart = document.getElementById('cartContainer');
                moviesInCart.innerHTML = '';
            let clearPrice = document.getElementById('totalPriceCheckout');
                clearPrice.textContent = '';

            localStorage.removeItem('cart')
            alert('Thank you for your purchase')
        });
}




function displayCartMovies() {
    let displayCartContainer = document.getElementById('cartContainer');
        // displayCartContainer.textContent = '';
    let cart = JSON.parse(localStorage.getItem('cart'));
    
    purchaseButtonHtml();
    displayTotalPrice(cart);

    cart.forEach((currentMovie) => {
        let movieHtml = createHtmlForMovie(currentMovie);
        displayCartContainer.appendChild(movieHtml);    
    })
}



function mainCart() {
    displayCartMovies();  
}

mainCart();
