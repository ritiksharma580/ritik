// increse number
let a = document.querySelector(".plus");
let b = document.querySelector(".minus");
let c = document.querySelector(".num")
number = 0;
a.addEventListener("click", function () {
    number++;
    c.innerHTML = number
})
b.addEventListener("click", function () {
    if (number == 0) {

    } else {
        number--;
        c.innerHTML = number
    }

});

const sizeElements = document.querySelectorAll('.sz');
const selectedSizes = document.getElementById('selected-sizes');
let selectedSizesArray = [];

sizeElements.forEach(size => {
    size.addEventListener('click', function () {
        // Toggle active class
        this.classList.toggle('active');

        // Check if size is already selected
        const sizeText = this.dataset.size;
        if (this.classList.contains('active')) {
            // Add to selected sizes array
            if (!selectedSizesArray.includes(sizeText)) {
                selectedSizesArray.push(sizeText);
            }
        } else {
            // Remove from selected sizes array
            selectedSizesArray = selectedSizesArray.filter(size => size !== sizeText);
        }

        // Update selected sizes display
        selectedSizes.textContent = selectedSizesArray.length > 0 ? selectedSizesArray.join(', ') : "";
    });
});



function changeImage(imageId) {
    // Pehle badi image ke element ko select kar lo
    var bigImg = document.getElementById('bigImage');

    // Phir us image ko transition effect do
    bigImg.style.opacity = '0';  // Image ko fade out karo
    setTimeout(function () {
        var smallImg = document.getElementById(imageId);
        bigImg.src = smallImg.src;  // Image source ko update karo
        bigImg.style.opacity = '1';  // Image ko fade in karo
    }, 300);  // Delay for smooth transition (300ms)
}

// Small images par click hone par active class add karo
document.querySelectorAll('.small-img-box').forEach(function (box) {
    box.addEventListener('click', function () {
        document.querySelectorAll('.small-img-box').forEach(function (box) {
            box.classList.remove('active');
        });
        this.classList.add('active');
    });
});






// Check if the product was added to the cart
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('added')) {
    document.getElementById('message').textContent = "Your product added to cart!";
    document.getElementById('message').style.color = "green";
    document.getElementById('message').style.fontSize = "20px";
    document.getElementById('message').style.margin = "10px 0";
}


document.addEventListener('DOMContentLoaded', function() {
   if (window.location.pathname.includes('AddtoCart.html')) {
       const addToCartBtn = document.querySelector('.btn1');

       // Suppose each product has a unique ID. Set a product ID for this page/product
       const productId = 'product_2'; // You can dynamically generate or assign the product ID.

       if (addToCartBtn) {
           addToCartBtn.addEventListener('click', function() {
               // Retrieve the cart from localStorage or create an empty cart
               let cart = JSON.parse(localStorage.getItem('cart')) || {};

               // Check if the product is already in the cart
               if (!cart[productId]) {
                   cart[productId] = 1; // Add the product to the cart
                   alert('Your product added to cart');
               } else {
                   alert('Product is already in cart');
               }

               // Save the updated cart back to localStorage
               localStorage.setItem('cart', JSON.stringify(cart));

               // Update cart count (based on total products in cart)
               updateCartCount();
           });
       }
   }
});

// Function to update cart count based on number of unique products in cart
function updateCartCount() {
   let cart = JSON.parse(localStorage.getItem('cart')) || {};
   let cartCount = Object.keys(cart).length; // Count of unique products
   localStorage.setItem('cartCount', cartCount); // Save the count to localStorage
}
