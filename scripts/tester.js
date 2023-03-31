var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKeys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

document.getElementById("dbutton").addEventListener("click", function(event) {
    alert("DB WORKING!")
})


