

function createHtmlForMovie(movie, movieId) {
    let cartListMovies = document.createElement('div');
        cartListMovies.classList.add('cart-list');
        cartListMovies.setAttribute('movie-id', movie.id)

    let imgStyleContainer = document.createElement('div');
        imgStyleContainer.classList.add('imgStyleContainer');

    let infoStyleContainer = document.createElement('div');
        infoStyleContainer.classList.add('infoStyleContainer');

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
        moviePrice.classList.add('cartInfo');

    let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', removeMovieFromCart);

        cartListMovies.append(imgStyleContainer, infoStyleContainer);
        imgStyleContainer.appendChild(movieImgInCart);
        infoStyleContainer.append(movieInCart, movieTitle, moviePrice, movieSalePrice, movieQuantity, removeButton);
        return cartListMovies;
}



function removeFromCartByMovieId(movieId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const movieIndex = cart.findIndex((movie) => movie.id === movieId);

    if (movieIndex >= 0 && movieIndex < cart.length) {
        cart.splice(movieIndex, 1); 
        localStorage.setItem('cart', JSON.stringify(cart)); 
    } else {
        console.error('Invalid index:', movieId);
    }
}

function removeMovieFromCart(event) {
    let buttonClicked = event.target;
    let movieId = buttonClicked.parentElement.parentElement.getAttribute('movie-id');
    
    removeFromCartByMovieId(movieId);

    buttonClicked.parentElement.parentElement.remove();
}




let totalPrice = 0;
function displayTotalPrice(movie) {
    
    movie.forEach(movie => {
        totalPrice += movie.price * movie.quantity;
    });
    
    let displayTotalPrice = document.getElementById ('totalPriceCheckout');
        displayTotalPrice.textContent = `Total Price: ${totalPrice}`;
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
