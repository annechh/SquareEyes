const API_MAIN_URL = "https://v2.api.noroff.dev";

export const API_MOVIE_URL = `${API_MAIN_URL}/square-eyes`;


export async function fetchMovieAPI(url) {
    try {
        let response = await fetch(url);
        let json = await response.json();
        return json;
    } catch (error) {
        console.error('Could not fetch data' + error);
        throw error("There was a problem!");
    } 
}

// User Stories
// - As a user, I want to view a list of products on the homepage. 👌
// - As a user, I want to filter products by category, gender or genre.👌
// - As a user, I want to view a single product page with more detail. 👌
// - As a user, I want to add a product to my basket.
// - As a user, I want to remove a product from my basket.
// - As a user, I want to view a summary of my cart on the checkout page.
// - As a user, I want to view an order-confirmation screen after checking out.