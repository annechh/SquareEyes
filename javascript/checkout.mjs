import { removeMovieFromCart, clearCart, resetCartsHtml, getCart} from "./cart.mjs";

// 1. ClearCartButton throwing error when calling displayCartMovies(); in removeMovieFromCart
//    ..when removing items from cart and want to go back to main page, new 
//    ..error happens next
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
        if (movie.onSale) {
            moviePrice.style.textDecoration = 'line-through';
        }

    let movieSalePrice = document.createElement('div');
        movieSalePrice.textContent = `On Sale: ${movie.discountedPrice}`;
        movieSalePrice.classList.add('cartInfo');
        movieSalePrice.style.color = 'green';
        if (!movie.onSale) {
            movieSalePrice.textContent = '';
        } 
        
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click',removeMovieFromCart);
        console.log("Remove button",removeButton);
        
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



// let totalPrice = 0;
// export function displayTotalPrice(movie) {
    
//     movie.forEach(movie => {
//         totalPrice += movie.price * movie.quantity;
//     });
    


//     let formattedTotalPrice = formatCurrency(totalPrice);
//     let displayTotalPrice = document.getElementById ('totalPriceCheckout');
//     displayTotalPrice.textContent = `Total Price: ${formattedTotalPrice}`;
    
// }


export function displayTotalPrice(cart) {
    let totalPrice = cart.reduce((acc, movie) => acc + movie.price * movie.quantity, 0);

    let formattedTotalPrice = formatCurrency(totalPrice);
    let displayTotalPrice = document.getElementById('totalPriceCheckout');
    displayTotalPrice.textContent = `Total Price: ${formattedTotalPrice}`; // 3 then this with error
    
}


// After the 3rd error, its clear, but when i try to access 
// ...movieinfo page, i get a new error


function formatCurrency(total) {
    return Math.round(total * 100) / 100;
}



// 2 Then this throws error
function purchaseButtonHtml() {
    let buyButton = document.getElementById('buyButton');
        buyButton.classList.add('btn');
        buyButton.addEventListener('click', () => {
            
            resetCartsHtml();
            localStorage.removeItem('cart')
            alert('Thank you for your purchase')
        });
}




export function displayCartMovies() {
    let displayCartContainer = document.getElementById('cartContainer');
        displayCartContainer.innerHTML = '';
    let cart = getCart();
    
    purchaseButtonHtml(); // 2 then this throws an error
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
