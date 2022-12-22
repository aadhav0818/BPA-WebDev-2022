document.querySelector(".car-quiz").style.display = "none";

function startQuiz() {
    document.querySelector("body").style.background = "#353333";
    document.querySelector(".car-quiz-desc").style.display = "none";
    document.querySelector(".car-quiz").style.display = "block";
    var quizBox = document.querySelector(".car-quiz-box");
}

// price slider (q1)

var priceSlider = document.querySelector(".price-range");
var priceInput = document.querySelector(".price-entry");

priceSlider.addEventListener("change", function() {
    priceInput.innerHTML = "day";
    document.querySelector(".price-entry").value = priceSlider.value;
});

priceInput.addEventListener("keypress", function(event) {
    if(event.key == "Enter") {
        if(priceInput.value < 10000 || priceInput.value > 100000) {
            priceInput.value = null;
        } else {
            document.querySelector(".price-range").value = priceInput.value;
        }   
    }
});

// mileage slider (q2)

var mileageSlider = document.querySelector(".mileage-range");
var mileageInput = document.querySelector(".mileage-entry");

mileageSlider.addEventListener("change", function() {
    document.querySelector(".mileage-entry").value = mileageSlider.value;
});

mileageInput.addEventListener("keypress", function(event) {
    if(event.key == "Enter") {
        if(mileageInput.value < 10000 || mileageInput.value > 150000) {
            mileageInput.value = null;
        } else {
            alert(mileageInput.value);
            document.querySelector(".mileage-range").value = mileageInput.value;
        }   
    }
});

// preferred styles (q3)
// add a specific class to the buttons that makes the button darker so that the user knows they selected it
var preferredStyles = [];

function selectVehicle(vehicleType, indx) {
    var btn = document.querySelectorAll(".body-btn")[indx];
    if(!preferredStyles.includes(vehicleType)) {
        btn.classList.remove("btn-outline-dark");
        btn.classList.add("btn-secondary");
        btn.style.color="white";
        preferredStyles.push(vehicleType);
    } else {
        btn.classList.remove("btn-secondary");
        btn.classList.add("btn-outline-dark");
        btn.style.color="black";
        preferredStyles.splice(preferredStyles.indexOf(vehicleType), 1);
    }
}


function findCars() {
    let maxPrice = priceInput.value;
    if(maxPrice == 100000) {
        maxPrice = 200000;
    } 
    let maxMiles = mileageInput.value;
    if(maxMiles == 150000) {
        maxMiles = 200000;
    }
    let bodyStyles = preferredStyles;
    if(maxPrice == null || maxMiles == null || bodyStyles.length == 0) {
        alert("Make sure that all the fields are filled out.");
        return;
    }
    document.querySelector(".car-quiz").remove();
    let matchedIndices = []
    for(var i = 0; i < vehicle_data.length; i++) {
        if(evalMiles(maxMiles, vehicle_data[i].miles) && evalPrice(maxPrice, vehicle_data[i].price) && evalBodyStyles(bodyStyles, vehicle_data[i].type)) {
            matchedIndices.push(i);
        }
    }
    displayMatchedVehicles(matchedIndices);
}   

function evalMiles(userMiles, vehicleMiles) { return userMiles >= vehicleMiles; }
function evalPrice(userPrice, vehiclePrice) { return userPrice >= vehiclePrice; }
function evalBodyStyles(userStyles, vehicleStyle) { return userStyles.includes(vehicleStyle); }


function displayMatchedVehicles(indices) {
    for(var i = 0; i < indices.length; i++) {
        let index = indices[i];
        let rel_make = vehicle_data[index].model.replaceAll(' ', '-');
        let checkpoint = vehicle_data[index].brand.replace("Mercedes-Benz", "Mercedes")
        let rel_filepath = vehicle_data[index].year + "-" + vehicle_data[index].color + "-" + checkpoint + "-" +  rel_make;
        
        document.querySelector(".car-results").innerHTML +=
        `
        <div class="col-sm-12 col-md-6 col-lg-3 " style="padding-top: 3rem;"> 
            <div class="card bg-dark text-white id-${vehicle_data[index].id}" style="width: 100%;">
                <img src="./vehicle-images/${rel_filepath}.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${vehicle_data[index].year} ${vehicle_data[index].color} ${vehicle_data[index].brand} ${vehicle_data[index].model}</h5>
                    <p class="card-text text-white" style="margin-bottom: 0px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 16 16">
                        <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
                    </svg>
                    Price: $${vehicle_data[i].price}
                    </p>
                    <p class="card-text text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                    </svg> 
                    Distance: ${vehicle_data[i].miles} mi
                    <br> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
                        <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
                    </svg>
                    Type: ${vehicle_data[i].type}
                    </p>
                    <div style='text-align: left;'>
                        <a href="./contact-us.html" class="btn btn-outline-secondary btn-inventory-card"><i class="fa-solid fa-user"></i> | Check Availability</a>
                    </div>   
                </div>
            </div>
        </div>
        `
    }
}

let vehicle_data = 
[
    {
        id: 1,
        model:"C 300 Sport",
        price:10538,
        color:"Red",
        brand:"Mercedes-Benz",
        year:2010,
        miles:112343,
        type:"Sedan"
    },

    {
        id: 2,
        model:"Insight Touring",
        price:29510,
        color:"Silver",
        brand:"Honda",
        year:2019,
        miles:25768,
        type:"Sedan"
    },


    {
        id: 3,
        model:"Impreza Premium",
        price:16950,
        color:"White",
        brand:"Subaru",
        year:2012,
        miles:54639,
        type:"Sedan"
    },

    {
        id: 4,
        model:"WRX STI",
        price:19967,
        color:"Orange",
        brand:"Subaru",
        year:2013,
        miles:68993,
        type:"Sedan"
    },

    {
        id: 5,
        model:"RX 350L Base",
        price:17934,
        color:"Red",
        brand:"Lexus",
        year:2013,
        miles:125789,
        type:"SUV"
    },

    {
        id: 6,
        model:"Pilot Elite",
        price:35758,
        color:"Blue",
        brand:"Honda",
        year:2019,
        miles:33523,
        type:"SUV"
    },

    {
        id: 7,
        model:"Highlander SE",
        price:24639,
        color:"Green",
        brand:"Toyota",
        year:2014,
        miles:112392,
        type:"SUV"
    },

    {
        id: 8,
        model:"R8 4.2",
        price:81844,
        color:"Blue",
        brand:"Audi",
        year:2015,
        miles:27988,
        type:"Coupe"
    },

    {
        id: 9,
        model:"RDX Base",
        price:18320,
        color:"Gray",
        brand:"Acura",
        year:2015,
        miles:21321,
        type:"SUV"
    },

    {
        id: 10,
        model:"TLX Tech",
        price:16632,
        color:"Gray",
        brand:"Acura",
        year:2015,
        miles:24490,
        type:"Sedan"
    },

    {
        id: 11,
        model:"LX 570 Base",
        price:36991,
        color:"Gray",
        brand:"Lexus",
        year:2015,
        miles:127651,
        type:"SUV"
    },

    {
        id: 12,
        model:"RAV4 LE",
        price:15950,
        color:"Gray",
        brand:"Toyota",
        year:2015,
        miles:74639,
        type:"SUV"
    },

    {
        id: 13,
        model:"Altima SV",
        price:16432,
        color:"Red",
        brand:"Nissan",
        year:2015,
        miles:89678,
        type:"Sedan"
    },

    {
        id: 14,
        model:"Avalon Limited",
        price:22757,
        color:"Tan",
        brand:"Toyota",
        year:2015,
        miles:45075,
        type:"Sedan"
    },

    {
        id: 15, 
        model:"Trax LTZ",
        price:15996,
        color:"Blue",
        brand:"Chevrolet",
        year:2016,
        miles:78323,
        type:"SUV"
    },

    {
        id: 16,
        model:"GLA 250 4MATIC",
        price:19452,
        color:"Gray",
        brand:"Mercedes-Benz",
        year:2020,
        miles:92452,
        type:"SUV"
    },

    {
        id: 17,
        model:"Murano Platinium",
        price:26750,
        color:"Orange",
        brand:"Nissan",
        year:2016,
        miles:98639,
        type:"SUV"
    },

    {
        id: 18,
        model:"MDX Base",
        price:21998,
        color:"Purple",
        brand:"Acura",
        year:2016,
        miles:19912,
        type:"SUV"
    },

    {
        id: 19,
        model:"Impala 2LT",
        price:19510,
        color:"Red",
        brand:"Chevrolet",
        year:2016,
        miles:54892,
        type:"Sedan"
    },

    {
        id: 20,
        model:"ES 350 Base",
        price:36789,
        color:"Silver",
        brand:"Lexus",
        year:2016,
        miles:44721,
        type:"Sedan"
    },

    {
        id: 21,
        model:"Sequoia Limited",
        price:37400,
        color:"Tan",
        brand:"Toyota",
        year:2016,
        miles:76347,
        type:"SUV"
    },

    {
        id: 23,
        model:"F-150 Limited",
        price:38998,
        color:"Red",
        brand:"Ford",
        year:2017,
        miles:19902,
        type:"Truck"
    },

    {
        id: 24,
        model:"Pathfinder SL",
        price:25996,
        color:"White",
        brand:"Nissan",
        year:2017,
        miles:56093,
        type:"SUV"
    },

    {
        id: 25,
        model:"Forester Premium 2.5i",
        price:17958,
        color:"White",
        brand:"Subaru",
        year:2017,
        miles: 94638,
        type:"Hatchback"
    },

    {
        id: 26,
        model:"Focus ST",
        price:16298,
        color:"Yellow",
        brand:"Ford",
        year:2017,
        miles:70000,
        type:"Sedan"
    },

    {
        id: 27,
        model:"Accord EX-L",
        price:27950,
        color:"Black",
        brand:"Honda",
        year:2020,
        miles:35632,
        type:"Sedan"
    },

    {
        id: 28,
        model:"Camaro ZL1",
        price:60661,
        color:"Blue",
        brand:"Chevrolet",
        year:2018,
        miles:15399,
        type:"Coupe"
    },

    {
        id: 29,
        model:"Focus SE",
        price:18998,
        color:"Blue",
        brand:"Ford",
        year:2018,
        miles:38002,
        type:"Sedan"
    },

    {
        id: 30,
        model:"4Runner Limited",
        price:35360,
        color:"Blue",
        brand:"Toyota",
        year:2018,
        miles:52432,
        type:"SUV"
    },

    {
        id: 31,
        model:"ILX A-Spec",
        price:24820,
        color:"Gray",
        brand:"Acura",
        year:2018,
        miles:41443,
        type:"Sedan"
    },

    {
        id: 32,
        model:"MDX Sport Hybrid",
        price:42012,
        color:"Gray",
        brand:"Acura",
        year:2018,
        miles:48561,
        type:"SUV"
    },

    {
        id: 33,
        model:"Q5 55 Prestige",
        price:32998,
        color:"Gray",
        brand:"Audi",
        year:2018,
        miles:59120,
        type:"SUV"
        },

        {
        id: 34,
        model:"Volt Premier",
        price:18559,
        color:"Gray",
        brand:"Chevrolet",
        year:2018,
        miles:82579,
        type:"Sedan"
    },

    {
        id: 35,
        model:"S5 Sportback",
        price:54998,
        color:"Red",
        brand:"Audi",
        year:2018,
        miles:33215,
        type:"Coupe"
    },

    {
        id: 36,
        model:"Fit EX",
        price:22400,
        color:"Orange",
        brand:"Honda",
        year:2019,
        miles:26447,
        type:"Sedan"
    },

    {
        id: 37,
        model:"HR-V EX-L",
        price:14639,
        color:"Gray",
        brand:"Honda",
        year:2016,
        miles:72392,
        type:"SUV"
    },

    {
        id: 38,
        model:"WRX Premium",
        price:27996,
        color:"Red",
        brand:"Subaru",
        year:2018,
        miles:26093,
        type:"Sedan"
    },

    {
        id: 39,
        model:"Cruze LS",
        price:18998,
        color:"Silver",
        brand:"Chevrolet",
        year:2018,
        miles:16641,
        type:"Sedan"
    },

    {
        id: 40,
        model:"S 560 4MATIC",
        price:57657,
        color:"Silver",
        brand:"Mercedes-Benz",
        year:2018,
        miles:42150,
        type:"Sedan"
    },

    {
        id: 41,
        model:"A6 2.0T Premium",
        price:24499,
        color:"White",
        brand:"Audi",
        year:2018,
        miles:37987,
        type:"Sedan"
    },

    {
        id: 42,
        model:"S5 3.0T Prestige",
        price:50485,
        color:"White",
        brand:"Audi",
        year:2018,
        miles:27625,
        type:"Sedan"
    },

    {
        id: 43,
        model:"Equinox 1LT",
        price:23998,
        color:"Black",
        brand:"Chevrolet",
        year:2019,
        miles:43623,
        type:"SUV"
    },

    {
        id: 44,
        model:"LS 500h Base",
        price:54998,
        color:"Black",
        brand:"Lexus",
        year:2019,
        miles:32822,
        type:"Sedan"
    },

    {
        id: 45,
        model:"RC F Base",
        price:61367,
        color:"Black",
        brand:"Lexus",
        year:2019,
        miles:22173,
        type:"Sports"
    },

    {
        id: 46,
        model:"CLS AMG",
        price:124320,
        color:"Black",
        brand:"Mercedes-Benz",
        year:2019,
        miles:20781,
        type:"Sedan"
    },

    {
        id: 47,
        model:"Crosstrek Hybrid Base",
        price:32757,
        color:"Blue",
        brand:"Subaru",
        year:2019,
        miles:55375,
        type:"Sedan"
    },

    {
        id: 48,
        model:"Odyssey Touring",
        price:41996,
        color:"Gray",
        brand:"Honda",
        year:2022,
        miles:12093,
        type:"SUV"
    },

    {
        id: 49,
        model:"Edge SEL",
        price:23992,
        color:"Red",
        brand:"Ford",
        year:2020,
        miles:50235,
        type:"SUV"
    },

    {
        id: 50,
        model:"GX 460 Premium",
        price:50420,
        color:"Gray",
        brand:"Lexus",
        year:2019,
        miles:46347,
        type:"SUV"
    },

    {
        id: 51,
        model:"A 220 4MATIC",
        price:39371,
        color:"White",
        brand:"Mercedes-Benz",
        year:2019,
        miles:17520,
        type:"Sedan"
    },

    {
        id: 52,
        model:"Titan Pro4X",
        price:42670,
        color:"Orange",
        brand:"Nissan",
        year:2019,
        miles:49765,
        type:"Truck"
    },

    {
        id: 53,
        model:"RLX Sport Hybrid",
        price:24521,
        color:"Red",
        brand:"Acura",
        year:2019,
        miles:34901,
        type:"Sedan"
    },

    {
        id: 54,
        model:"Sentra SR Turbo",
        price:19679,
        color:"Red",
        brand:"Nissan",
        year:2019,
        miles: 42392,
        type:"SUV"
    },

    {
        id: 55,
        model:"IS 300 F SPORT",
        price:39632,
        color:"Silver",
        brand:"Lexus",
        year:2019,
        miles: 32343,
        type:"Sedan"
    },

    {
        id: 56,
        model:"AMG GLS 63 4MATIC",
        price:52632,
        color:"Silver",                                 
        brand:"Mercedes-Benz",
        year:2019,
        miles:51390,
        type:"SUV"
    },

    {
        id: 57,
        model:"GTR Premium coupe",
        price:120876,
        color:"Silver",
        brand:"Nissan",
        year:2019,
        miles:18162,
        type:"Coupe"
    },

    {
        id: 58,
        model:"RDX Advance",
        price:38998,
        color:"White",
        brand:"Acura",
        year: 2019,
        miles:28220,
        type:"SUV"
    },

    {
        id: 59,
        model:"TLX A-Spec",
        price:26998,
        color:"White",
        brand:"Acura",
        year:2019,
        miles:64221,
        type:"Sedan"
    },

    {
        id: 60,
        model:"CR-V EX-L",
        price:34998,
        color:"Red",
        brand:"Honda",
        year:2021,
        miles:11822,
        type:"SUV"
    },

    {
        id: 61,
        model:"GLB 250 4MATIC",
        price:33945,
        color:"White",
        brand:"Mercedes-Benz",
        year:2019,
        miles:32946,
        type:"SUV"
    },

    {
        id: 62,
        model:"G 550",
        price:142356,
        color:"White",
        brand:"Mercedes-Benz",
        year:2019,
        miles:12312,
        type:"SUV"
    },

    {
        id: 63,
        model:"Leaf SL",
        price:22900,
        color:"White",
        brand:"Nissan",
        year:2019,
        miles:32475,
        type:"Hatchback"
    },

    {
        id: 64,
        model:"Q7 55 Prestige",
        price:57910,
        color:"Black",
        brand:"Audi",
        year:2020,
        miles:39574,
        type:"SUV"
    },

    {
        id: 65,
        model:"CLA 250",
        price:34876,
        color:"Black",
        brand:"Mercedes-Benz",
        year:2020,
        miles:22701,
        type:"Sedan"
    },

    {
        id: 66,
        model:"Armada Platinium",
        price:36300,
        color:"Black",
        brand:"Nissan",
        year:2020,
        miles:46347,
        type:"SUV"
    },

    {
        id: 67,
        model:"Outback Onyx Edition XT",
        price:32998,
        color:"Black",
        brand:"Subaru",
        year:2020,
        miles:43822,
        type:"Hatchback"
    },

    {
        id: 68,
        model:"F-150 Raptor",
        price:57870,
        color:"Blue",
        brand:"Ford",
        year:2020,
        miles:35921,
        type:"Truck"
    },

    {
        id: 69,
        model:"AMG GLE 43 4MATIC",
        price:63765,
        color:"Blue",
        brand:"Mercedes-Benz",
        year:2020,
        miles:12301,
        type:"SUV"
    },

    {
        id: 70,
        model:"Impreza Premium",
        price:23400,
        color:"Blue",
        brand:"Subaru",
        year:2020,
        miles:16347,
        type:"Sedan"
    },

    {
        id: 71,
        model:"Q7 Premium Plus",
        price:3998,
        color:"Gray",
        brand:"Audi",
        year:2017,
        miles:42114,
        type:"SUV"
    },

    {
        id: 72,
        model:"Civic Touring",
        price:32757,
        color:"Red",
        brand:"Honda",
        year:2021,
        miles:4075,
        type:"Sedan"
    },

    {
        id: 73,
        model:"SQ5",
        price:52981,
        color:"Green",
        brand:"Audi",
        year:2020,
        miles:45661,
        type:"SUV"
    },

    {
        id: 74,
        model:"Mustang GT Premium",
        price:35998,
        color:"Orange",
        brand:"Ford",
        year:2020,
        miles:35921,
        type:"Coupe"
    },

    {
        id: 75,
        model:"Camry SE",
        price:31758,
        color:"Red",
        brand:"Toyota",
        year:2020,
        miles:43823,
        type:"Sedan"
    },

    {
        id: 76,
        model:"Prius LE",
        price:19367,
        color:"Red",
        brand:"Toyota",
        year:2020,
        miles:28973,
        type:"Sedan"
    },

    {
        id: 77,
        model:"Silverado 2500 HD Z71",
        price:55995,
        color:"Silver",
        brand:"Chevrolet",
        year:2020,
        miles:42800,
        type:"Truck"
    },

    {
        id: 78,
        model:"MDX Base",
        price:49231,
        color:"White",
        brand:"Acura",
        year:2020,
        miles:60189,
        type:"SUV"
    },

    {
        id: 79,
        model:"Passport Touring",
        price:31200,
        color:"Gray",
        brand:"Honda",
        year:2020,
        miles:28973,
        type:"SUV"
    },

    {
        id: 80,
        model:"Expedition Limited",
        price:54448,
        color:"White",
        brand:"Ford",
        year:2020,
        miles:20112,
        type:"SUV"
    },

    {
        id: 81,
        model:"Explorer",
        price:24123,
        color:"White",
        brand:"Ford",
        year:2020,
        miles:25711,
        type:"SUV"
    },
    
    {
        id: 82,
        model:"Corolla",
        price:24998,
        color:"White",
        brand:"Toyota",
        year:2020,
        miles:38822,
        type:"Hatchback"
    },

    {
        id: 83,
        model:"Supra",
        price:60001,
        color:"Yellow",
        brand:"Toyota",
        year:2020,
        miles:28162,
        type:"Coupe"
    },

    {
        id: 84,
        model:"Q5 45 Premium",
        price:36856,
        color:"Blue",
        brand:"Audi",
        year:2021,
        miles:49347,
        type:"SUV"
    },

    {
        id: 85,
        model:"Trailblazer RS",
        price:31998,
        color:"Blue",
        brand:"Chevrolet",
        year:2021,
        miles:21327,
        type:"SUV"
    },

    {
        id: 86,
        model:"Legacy Limited XT",
        price:32639,
        color:"Blue",
        brand:"Subaru",
        year:2021,
        miles: 13239,
        type:"Sedan"
    },

    {
        id: 87,
        model:"F-150 Limited",
        price:67230,
        color:"Black",
        brand:"Ford",
        year:2021,
        miles:56123,
        type:"Truck"
    },

    {
        id: 88,
        model:"Tacoma SR5",
        price:31996,
        color:"Gray",
        brand:"Toyota",
        year:2021,
        miles:16093,
        type:"Truck"
    },

    {
        id: 89,
        model:"Suburban Z71",
        price:68987,
        color:"Red",
        brand:"Chevrolet",
        year:2021,
        miles:19489,
        type:"SUV"
    },

    {
        id: 90,
        model:"Escape",
        price:29001,
        color:"Red",
        brand:"Ford",
        year:2021,
        miles:42783,
        type:"SUV"
    },

    {
        id: 91,
        model:"NX 300 F SPORT",
        price:36409,
        color:"Silver",
        brand:"Lexus",
        year:2021,
        miles:10980,
        type:"SUV"
    },

    {
        id: 92,
        model: "ILX A-Spec",
        price:31962,
        color:"White",
        brand:"Acura",
        year:2021,
        miles:65432,
        type:"Sedan"
    },

    {
        id: 93,
        model:"Tahoe LS",
        price:54658,
        color:"White",
        brand:"Chevrolet",
        year:2021,
        miles:29341,
        type:"SUV"
    },

    {
        id: 94,
        model:"Crosstrek Premium",
        price:27867,
        color:"White",
        brand:"Subaru",
        year:2021,
        miles:12432,
        type:"Hatchback"
    },

    {
        id: 95,
        model:"Ridgeline RTL-E",
        price:39201,
        color:"Red",
        brand:"Honda",
        year:2021,
        miles:19456,
        type:"Truck"
    },

    {
        id: 96,
        model:"ES 350 F SPORT",
        price:46987,
        color:"Blue",
        brand:"Lexus",
        year:2022,
        miles: 13823,
        type:"Sedan"
    },

    {
        id: 97,
        model:"BRZ Limited",
        price:35021,
        color:"Blue",
        brand:"Subaru",
        year:2022,
        miles:2162,
        type:"Coupe"
    },

    {
        id: 98,
        model:"Altima SR",
        price:26890,
        color:"Gray",
        brand:"Nissan",
        year:2022,
        miles:8907,
        type:"Sedan"
    },

    {
        id: 99,
        model:"RX 350L Base",
        price:59360,
        color:"Silver",
        brand:"Lexus",
        year:2022,
        miles:5209,
        type:"SUV"
    },

    {
        id: 100,
        model:"A7 Premium",
        price: 47123,
        color:"Gray",
        brand:"Audi",
        year:2020,
        miles:46190,
        type:"Sedan"
    }

]



