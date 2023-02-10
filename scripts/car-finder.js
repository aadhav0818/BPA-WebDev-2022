// document.querySelector(".car-quiz").style.display = "none";

// function startQuiz() {
//     document.querySelector("body").style.background = "#353333";
//     document.querySelector(".car-quiz-desc").style.display = "none";
//     document.querySelector(".car-quiz").style.display = "block";
//     var quizBox = document.querySelector(".car-quiz-box");
// }

// // price slider (q1)

// var priceSlider = document.querySelector(".price-range");
// var priceInput = document.querySelector(".price-entry");

// priceSlider.addEventListener("change", function() {
//     priceInput.innerHTML = "day";
//     document.querySelector(".price-entry").value = priceSlider.value;
// });

// priceInput.addEventListener("keypress", function(event) {
//     if(event.key == "Enter") {
//         if(priceInput.value < 10000 || priceInput.value > 100000) {
//             priceInput.value = null;
//         } else {
//             document.querySelector(".price-range").value = priceInput.value;
//         }   
//     }
// });

// // mileage slider (q2)

// var mileageSlider = document.querySelector(".mileage-range");
// var mileageInput = document.querySelector(".mileage-entry");

// mileageSlider.addEventListener("change", function() {
//     document.querySelector(".mileage-entry").value = mileageSlider.value;
// });

// mileageInput.addEventListener("keypress", function(event) {
//     if(event.key == "Enter") {
//         if(mileageInput.value < 10000 || mileageInput.value > 150000) {
//             mileageInput.value = null;
//         } else {
//             alert(mileageInput.value);
//             document.querySelector(".mileage-range").value = mileageInput.value;
//         }   
//     }
// });

// // preferred styles (q3)
// // add a specific class to the buttons that makes the button darker so that the user knows they selected it
// var preferredStyles = [];

// function selectVehicle(vehicleType, indx) {
//     var btn = document.querySelectorAll(".body-btn")[indx];
//     if(!preferredStyles.includes(vehicleType)) {
//         btn.classList.remove("btn-outline-dark");
//         btn.classList.add("btn-secondary");
//         btn.style.color="white";
//         preferredStyles.push(vehicleType);
//     } else {
//         btn.classList.remove("btn-secondary");
//         btn.classList.add("btn-outline-dark");
//         btn.style.color="black";
//         preferredStyles.splice(preferredStyles.indexOf(vehicleType), 1);
//     }
// }


// function findCars() {
//     let maxPrice = priceInput.value;
//     if(maxPrice == 100000) {
//         maxPrice = 200000;
//     } 
//     let maxMiles = mileageInput.value;
//     if(maxMiles == 150000) {
//         maxMiles = 200000;
//     }
//     let bodyStyles = preferredStyles;
//     if(maxPrice == null || maxMiles == null || bodyStyles.length == 0) {
//         alert("Make sure that all the fields are filled out.");
//         return;
//     }
//     document.querySelector(".car-quiz").remove();
//     let matchedIndices = []
//     for(var i = 0; i < vehicle_data.length; i++) {
//         if(evalMiles(maxMiles, vehicle_data[i].miles) && evalPrice(maxPrice, vehicle_data[i].price) && evalBodyStyles(bodyStyles, vehicle_data[i].type)) {
//             matchedIndices.push(i);
//         }
//     }
//     displayMatchedVehicles(matchedIndices);
// }   

// function evalMiles(userMiles, vehicleMiles) { return userMiles >= vehicleMiles; }
// function evalPrice(userPrice, vehiclePrice) { return userPrice >= vehiclePrice; }
// function evalBodyStyles(userStyles, vehicleStyle) { return userStyles.includes(vehicleStyle); }


// function displayMatchedVehicles(indices) {
//     for(var i = 0; i < indices.length; i++) {
//         let index = indices[i];
//         let rel_make = vehicle_data[index].model.replaceAll(' ', '-');
//         let checkpoint = vehicle_data[index].brand.replace("Mercedes-Benz", "Mercedes")
//         let rel_filepath = vehicle_data[index].year + "-" + vehicle_data[index].color + "-" + checkpoint + "-" +  rel_make;
        
//         document.querySelector(".car-results").innerHTML +=
//         `
//         <div class="col-sm-12 col-md-6 col-lg-3 " style="padding-top: 3rem;"> 
//             <div class="card bg-dark text-white id-${vehicle_data[index].id}" style="width: 100%;">
//                 <img src="./vehicle-images/${rel_filepath}.jpg" class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${vehicle_data[index].year} ${vehicle_data[index].color} ${vehicle_data[index].brand} ${vehicle_data[index].model}</h5>
//                     <p class="card-text text-white" style="margin-bottom: 0px;">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 16 16">
//                         <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
//                     </svg>
//                     Price: $${vehicle_data[i].price}
//                     </p>
//                     <p class="card-text text-white">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
//                         <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
//                     </svg> 
//                     Distance: ${vehicle_data[i].miles} mi
//                     <br> 
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
//                         <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
//                     </svg>
//                     Type: ${vehicle_data[i].type}
//                     </p>
//                     <div style='text-align: left;'>
//                         <a href="./contact-us.html" class="btn btn-outline-secondary btn-inventory-card"><i class="fa-solid fa-user"></i> | Check Availability</a>
//                     </div>   
//                 </div>
//             </div>
//         </div>
//         `
//     }
// }

