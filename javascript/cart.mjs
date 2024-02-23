// import { displayTotalPrice } from "./checkout.mjs";

export function getCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart;
}


export function createCart() {
    const cart = localStorage.getItem('cart');
    // console.log('cart local storage',cart);
    if (!cart) {
        localStorage.setItem('cart', JSON.stringify([]))
    } 
}


export function clearCart() {
    const confirmedClear = window.confirm('Do you want to clear your cart?')
    
    if (confirmedClear) {
        localStorage.setItem('cart', JSON.stringify([]))
        console.log('cart is cleared');
        resetCartsHtml();
    } 
}

export function resetCartsHtml() {
    let moviesInCart = document.getElementById('cartContainer');
        moviesInCart.innerHTML = '';
    let clearPrice = document.getElementById('totalPriceCheckout');
        clearPrice.textContent = 'Total Price: ' + 0;
}


export function addToCart(movie) {
    const cart = getCart();

    const movieIndex = cart.findIndex(currentMovie => {
        console.log('current movie',currentMovie);
        if (movie.id === currentMovie.id) {
            return true;
        }
        return false;
    })

    if (movieIndex === -1) {
        cart.push({...movie, quantity: 1});
    } else {
        cart[movieIndex].quantity += 1;
    }
        localStorage.setItem('cart', JSON.stringify(cart));
}



function removeFromCartByMovieId(movieId) {
    const cart = getCart();

    const movieIndex = cart.findIndex((movie) => movie.id === movieId);
    
    if (movieIndex >= 0 && movieIndex < cart.length) {
        cart.splice(movieIndex, 1); 
        localStorage.setItem('cart', JSON.stringify(cart)); 
    } 
    
}

export function removeMovieFromCart(event) {
    let buttonClicked = event.target;
    let movieId = buttonClicked.parentElement.parentElement.getAttribute('movie-id');
    
    removeFromCartByMovieId(movieId);
    
    buttonClicked.parentElement.parentElement.remove();

    // let updateCart = getCart();
    // updateTotalCartPrice(updateCart);
    displayCartMovies();
    
    
}

// export function updateTotalCartPrice(cart) {
//     let totalPrice = 0;

//     function reducePrice(cartTotal, movie) {
//         let moviePrice = movie.price - movie.discountedPrice;
//             if (moviePrice > 0) {
//                 return cartTotal + movie.discountedPrice;
//             } else {
//                 return cartTotal + movie.price;
//             }
//     }
//     let updateCart = cart.reduce(reducePrice, totalPrice);
//         updateCart = document.getElementById('totalPriceCheckout');
// }




// const updateCartTotal = (cart) => {
//     let initialValue = 0; 

//  // here it checks if its the discount price or reg price and returns the price.
//     const reduceFunction = (cartTotal, game) => {
//         let discount = game.price - game.discountedPrice
//         if (discount > 0){
//             return cartTotal + game.discountedPrice
//         }else {
//             return cartTotal + game.price
//         }

//     }
//     //updatedCartTotal take the return value from reducefuntion and adds it with the initialvalue
//     let updatedCartTotal = cart.reduce(reduceFunction, initialValue) 

//     let inputCartTotal = document.getElementById("cartTotal")
//     inputCartTotal.innerText = "$" + Math.round(updatedCartTotal *100)/100 //makes the number not go to the moon in decimals


// }