

// create function for cart button to go to checkout page

// export function goToCheckoutPage() {
//     const cartCheckoutPageButton = document.getElementById('cartIcon');
    
//     const cartCheckoutPageLink = document.createElement('a');
//         cartCheckoutPageLink.href = 'html/checkout.html';

//         cartCheckoutPageLink.addEventListener('click', () => {
//             console.log('clicked');
//             console.log(cartCheckoutPageButton);
//         })
        
//         // linkToCheckoutPage();
        
//         cartCheckoutPageButton.appendChild(cartCheckoutPageLink);
//     }

// // function linkToCheckoutPage() {
// // }


// goToCheckoutPage();






// export function goToCheckoutPage() {
//     const cartCheckoutPageButton = document.getElementById('cartIcon');

//     // Create an anchor element
//     const cartCheckoutPageLink = document.createElement('a');
//     cartCheckoutPageLink.href = 'html/checkout.html';

//     // Append the icon (or any other content) to the anchor element
//     cartCheckoutPageLink.appendChild(cartCheckoutPageButton.firstElementChild.cloneNode(true));

//     // Replace the cartIcon container with the new anchor element
//     cartCheckoutPageButton.parentNode.replaceChild(cartCheckoutPageLink, cartCheckoutPageButton);

//     // Add an event listener to the anchor element
//     cartCheckoutPageLink.addEventListener('click', (event) => {
//         // Prevent the default action of the click event
//         event.preventDefault();
        
//         // Navigate to the checkout page
//         window.location.href = cartCheckoutPageLink.href;
//     });
// }

// // Call the function to initialize the behavior
// goToCheckoutPage();
