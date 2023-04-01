const carsNames = ["Toyota Supra", "Acura ILX A-Spec", "Chevrolet Camaro ZL1", "Mercedes-Benz CLA-250"];
const carsCTAs = ["Power up your drive with the Supra.", "Look sharp at every turn.", "Go above and beyond the ordinary.", "Luxurious. Fast. Comfortable."];
const carsFP = ["./vehicle-images/2020-Yellow-Toyota-Supra.jpg", "./vehicle-images/2021-White-Acura-ILX-A-Spec.jpg", "./vehicle-images/2018-Blue-Chevrolet-Camaro-ZL1.jpg", "./vehicle-images/2020-Black-Mercedes-CLA-250.jpg"];

const trucksNames = ["Ford F-150 Limited", "Chevrolet Silverado 2500", "Nissan Titan Pro 4X", "Toyota Tacoma SR5"];
const trucksCTAs = ["Tough from the ground up.", "Built to last. Born to play.", "Level up your adventures.", "Built to withstand trails and rough terrains."];
const trucksFP = ["./vehicle-images/2017-Red-Ford-F-150-Limited.jpg", "./vehicle-images/2020-Silver-Chevrolet-Silverado-2500-HD-Z71.jpg", "./vehicle-images/2019-Orange-Nissan-Titan-Pro4X.jpg", "./vehicle-images/2021-Gray-Toyota-Tacoma-SR5.jpg"];

const suvsNames = ["Toyota 4Runner Limited", "Audi Q7", "Mercedes-Benz AMG GLE 43 4-MATIC", "Chevrolet Tahoe LS"];
const suvsCTAs = ["Make every ride an adventure.", "Drive comfortably in style.", "Luxurious. Stylish. Intuitive.", "Take your family adventures above and beyond."];
const suvsFP = ["./vehicle-images/2018-Blue-Toyota-4Runner-Limited.jpg", "./vehicle-images/2017-Gray-Audi-Q7-Premium-Plus.jpg", "./vehicle-images/2020-Blue-Mercedes-AMG-GLE-43-4MATIC.jpg", "./vehicle-images/2021-White-Chevrolet-Tahoe-LS.jpg"];

var currVehicle = "car";

function switchCars() {
    if(currVehicle == "car") return;
    var carImgs = document.querySelectorAll(".card-img");
    var carVehicleNames = document.querySelectorAll(".car-card-vehicle-name");
    var carCTAs = document.querySelectorAll(".car-card-cta");

    for(var i = 0; i < 4; i++) {
        carImgs[i].src = carsFP[i];
        carVehicleNames[i].innerHTML = carsNames[i];
        carCTAs[i].innerHTML = carsCTAs[i];
    }
    modifyLink(getCurrIndex(currVehicle), 0);
    currVehicle = "car";
}

function switchTrucks() {
    if(currVehicle == "truck") return;
    var truckImgs = document.querySelectorAll(".card-img");
    var truckVehicleNames = document.querySelectorAll(".car-card-vehicle-name");
    var truckCTAs = document.querySelectorAll(".car-card-cta");
    for(var i = 0; i < 4; i++) {
        truckImgs[i].src = trucksFP[i];
        truckVehicleNames[i].innerHTML = trucksNames[i];
        truckCTAs[i].innerHTML = trucksCTAs[i];
    }
    modifyLink(getCurrIndex(currVehicle), 1);
    currVehicle = "truck";
}


function switchSUVs() {
    if(currVehicle == "suv") return;
    var suvImgs = document.querySelectorAll(".card-img");
    var suvVehicleNames = document.querySelectorAll(".car-card-vehicle-name");
    var suvCTAs = document.querySelectorAll(".car-card-cta");
    for(var i = 0; i < 4; i++) {
        suvImgs[i].src = suvsFP[i];
        suvVehicleNames[i].innerHTML = suvsNames[i];
        suvCTAs[i].innerHTML = suvsCTAs[i];
    }
    modifyLink(getCurrIndex(currVehicle), 2);
    currVehicle = "suv";

}

function modifyLink(oldIndex, newIndex) { // oldIndex is the position of the previously active nav link
    document.querySelectorAll(".feat-nav-link")[oldIndex].classList.remove("active-nav-link");
    document.querySelectorAll(".feat-nav-link")[newIndex].classList.add("active-nav-link");
}

function getCurrIndex(vehicleName) {
    if(vehicleName == "car") return 0;
    else if(vehicleName == "truck") return 1;
    else return 2;
}
