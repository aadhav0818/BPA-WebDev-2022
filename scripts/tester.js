import { initializeApp, credential as _credential } from "firebase-admin";

import serviceAccount from "../serviceAccountKeys.json";

initializeApp({
  credential: _credential.cert(serviceAccount)
});

document.getElementById("dbutton").addEventListener("click", function(event) {
    alert("DB WORKING")
})


