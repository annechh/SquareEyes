// cart, goes to a seperate mjs file for export
export function createCart() {
    const cart = localStorage.getItem('cart');
    // console.log('cart local storage',cart);
    if (!cart) {
        localStorage.setItem('cart', JSON.stringify([]))
    } 
}

export function addToCart(movie) {
    const cart = JSON.parse(localStorage.getItem('cart'));

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