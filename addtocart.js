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








