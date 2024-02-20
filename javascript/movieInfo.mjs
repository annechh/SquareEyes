

let movieInfo = JSON.parse(localStorage.getItem('movie'));


const chosenMovie = () => {
    let movieImageUrl = movieInfo.image.url;
    
    let movieImageElement = document.createElement('img');
    movieImageElement.classList = 'imgTest';
    movieImageElement.src = movieImageUrl;
    
    document.getElementById('movieImgContainer').appendChild(movieImageElement);
}

const chosenMovieTitle = () => {
    let movieTitle = movieInfo.title;
    
    let title = document.createElement('h2');
        title.classList = 'movieTitle';
        title.textContent = movieTitle;
        
        document.getElementById('movieTitleContainer').appendChild(title);
}

const chosenMovieDescription = () => {
    let movieDescription = movieInfo.description;
    
    let description = document.createElement('h3');
        description.classList = 'movieDescription'
        description.textContent = movieDescription;
        
        document.getElementById('allMovieInfo').appendChild(description);
}

const chosenMovieGenre = () => {
    let movieGenre = movieInfo.genre;
    
    let genre = document.createElement('h3');
        genre.classList = 'movieGenre';
        genre.textContent = 'Genre: ' + movieGenre;
        
        document.getElementById('allMovieInfo').appendChild(genre);
}

const chosenMoviePrice = () => {
    let moviePrice = movieInfo.price;
    let movieOnSale = movieInfo.onSale;
    
    let price = document.createElement('div');
        price.classList = 'moviePrice';
    
    let originalPrice = document.createElement('h3');
        originalPrice.textContent = 'Price: ' + moviePrice + ' Kr';
        if (movieOnSale) {
            originalPrice.style.textDecoration = 'line-through';
        }
        price.appendChild(originalPrice);
        
        if (movieOnSale) {
            let salePrice = moviePrice;
            let salePriceElement = document.createElement('h3');
            salePriceElement.textContent = 'On Sale: ' + salePrice + ' Kr';
            salePriceElement.style.color = 'green';
            price.appendChild(salePriceElement);
        }

        document.getElementById('allMovieInfo').appendChild(price);
}

const chosenMovieReleased = () => {
    let movieReleased = movieInfo.released;
    
    let released = document.createElement('h3');
        released.classList = 'movieReleased';
        released.textContent = 'Released: ' + movieReleased;
        
        document.getElementById('allMovieInfo').appendChild(released);
}

const chosenMovieRating = () => {
    let movieRatings = movieInfo.rating;
    
    let rating = document.createElement('h3');
        rating.classList = 'movieRatings';
        rating.textContent = 'Rating: ' + movieRatings;
        
        document.getElementById('allMovieInfo').appendChild(rating);
}

chosenMovie();
chosenMovieTitle();
chosenMovieDescription();
chosenMovieGenre();
chosenMoviePrice();
chosenMovieReleased();
chosenMovieRating();


const button = () => {
    let createButton = document.createElement('button');
        createButton.classList = 'btn';
        createButton.price = movieInfo.price;
        createButton.textContent = createButton.price + ' Kr';
        createButton.addEventListener('click', () => {
            localStorage.setItem('movie', JSON.stringify(movieInfo));
        })
        document.getElementById('btnContainer').appendChild(createButton);
}
let clickedButtonLink = document.createElement('a');
    clickedButtonLink.href = '/html/checkout.html';
    console.log(clickedButtonLink);

button();

