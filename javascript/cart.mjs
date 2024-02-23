// import { displayCartMovies } from "./checkout.mjs";

function getCart() {
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
    localStorage.setItem('cart', JSON.stringify([]))
    console.log('cart is cleared');
}



export function addToCart(movie) {
    // const cart = JSON.parse(localStorage.getItem('cart'));
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
    console.log('movie index',movieIndex);

        console.log('CART',cart);
        localStorage.setItem('cart', JSON.stringify(cart));
}





function removeFromCartByMovieId(movieId) {
    const cart = getCart();

    const movieIndex = cart.findIndex((movie) => movie.id === movieId);
    
    if (movieIndex >= 0 && movieIndex < cart.length) {
        cart.splice(movieIndex, 1); 
        localStorage.setItem('cart', JSON.stringify(cart)); 
    } else {
        console.error('Invalid index:', movieId);
    }
}



export function removeMovieFromCart(event) {
    let buttonClicked = event.target;
    let movieId = buttonClicked.parentElement.parentElement.getAttribute('movie-id');
    
    removeFromCartByMovieId(movieId);
    

    buttonClicked.parentElement.parentElement.remove();
}



