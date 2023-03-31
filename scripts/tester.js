var randomCountry = require('random-country');

let ct = randomCountry({ full: true });
let ct2 = randomCountry({ full: true });
document.getElementById("dbutton").addEventListener("click", function(event) {
    alert(ct + " " + ct2);
})


