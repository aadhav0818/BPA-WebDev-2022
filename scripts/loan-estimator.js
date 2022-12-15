var inputVals = document.querySelectorAll('.input-field'); 
var selectVals = document.querySelectorAll('.select-field');
var creditScore = document.getElementById("credit-score-drop-down").options[document.getElementById("credit-score-drop-down").selectedIndex].value;
var loanTerm = parseInt(document.getElementById("loan-term-drop-down").options[document.getElementById("loan-term-drop-down").selectedIndex].text.substring(0, 2));


for(var i = 0; i < inputVals.length; i++) {
    inputVals[i].addEventListener("keypress", function(event) {
        if(event.key === "Enter") { 
            event.preventDefault();
        }
    })
}

function calculateMonthlyPayment() {
    creditScore = document.getElementById("credit-score-drop-down").options[document.getElementById("credit-score-drop-down").selectedIndex].value;
    loanTerm = parseInt(document.getElementById("loan-term-drop-down").options[document.getElementById("loan-term-drop-down").selectedIndex].text.substring(0, 2));
    var price = parseFloat(inputVals[0].value);  
    var downPay = parseFloat(inputVals[1].value);
    var tradeIn = parseFloat(inputVals[2].value);
    if(downPay > price) {
        alert("The down payment must be less than or equal to the vehicle price."); // replace with a bootstrap icon
        // code to prevent the form from resetting
    } 
    else {
        var priceWithFees =  price* 1.0625 + 100; // 100 for registration and title fees
        var totalAmount = priceWithFees - downPay - tradeIn;
        var rate = getAPR(creditScore) / 12;
        var monthlyPay = ((priceWithFees - downPay - tradeIn) * ((rate * Math.pow(1 + rate, loanTerm)) / (Math.pow(1+rate, loanTerm) - 1)));
        updateFields(monthlyPay.toFixed(2), price.toFixed(2), downPay.toFixed(2), tradeIn.toFixed(2), (priceWithFees - price).toFixed(2), totalAmount.toFixed(2));
    }
}

function getAPR(rating) {
    switch(rating) {
        case "excellent":
            return 0.053;
        case "very-good":
            return 0.069;
        case "good":
            return 0.0838;
        case "fair":
            return 0.0985
        case "below-average":
            return 0.1739;
        default:
            return 0;
    }
}

function updateFields(monthlyPay, price, downPay, tradeIn, otherFees, totalAmount) {
    document.querySelector(".monthly-price").innerHTML = "$" + monthlyPay.toLocaleString("en-US");
    document.querySelector(".vehicle-price").innerHTML = "$" + price.toLocaleString("en-US");
    document.querySelector(".down-payment").innerHTML = "$" + downPay.toLocaleString("en-US");
    document.querySelector(".trade-in").innerHTML = "$" + tradeIn.toLocaleString("en-US");
    document.querySelector('.other-fees').innerHTML = "$" + otherFees.toLocaleString("en-US");
    document.querySelector(".total-amount").innerHTML = "$" + totalAmount.toLocaleString("en-US");
    document.querySelector(".est-monthly-payment").innerHTML = "$" + monthlyPay.toLocaleString("en-US");
}
