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