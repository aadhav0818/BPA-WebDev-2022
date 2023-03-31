document.getElementById("dbutton").addEventListener("click", function(event) {
    var randomCountry = require('random-country');
    alert(randomCountry({ full: true }));
})


