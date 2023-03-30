var searchBarVal = document.querySelector("#search-value");
var searchBtn = document.querySelector("#search-btn");

searchBarVal.addEventListener("keydown", function(e) {
    getTopResults(searchBarVal.innerHTML);
})

searchBtn.addEventListener("keypress", function(e) {
    return  
})

function getTopResults(string) {
    var topResults = []
}