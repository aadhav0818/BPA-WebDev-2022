var inputVals = document.querySelectorAll('.input-field'); 
var selectVals = document.querySelectorAll('.select-field');
var creditScore = document.getElementById("credit-score-drop-down").options[document.getElementById("credit-score-drop-down").selectedIndex].value;
var loanTerm = parseInt(document.getElementById("loan-term-drop-down").options[document.getElementById("loan-term-drop-down").selectedIndex].text.substring(0, 2));




for(var i = 0; i < inputVals.length; i++) {
    inputVals[i].addEventListener("keypress", function(event) {
        if(event.key === "Enter") { 
            event.preventDefault();
        }
    });
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
        updateFields(monthlyPay.toFixed(2), price.toFixed(2), downPay.toFixed(2), tradeIn.toFixed(2), (priceWithFees - price).toFixed(2), totalAmount.toFixed(2), getAPR(creditScore));
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

function updateFields(monthlyPay, price, downPay, tradeIn, otherFees, totalAmount, apr) {
    const commaFormatter = Intl.NumberFormat('en-US');
    document.querySelector(".monthly-price").innerHTML = "$" + formatPrice(monthlyPay);
    document.querySelector(".vehicle-price").innerHTML = "$" + formatPrice(price);
    document.querySelector(".down-payment").innerHTML = "$" + formatPrice(downPay);
    document.querySelector(".trade-in").innerHTML = "$" + formatPrice(tradeIn);
    document.querySelector('.other-fees').innerHTML = "$" + formatPrice(otherFees);
    document.querySelector(".total-amount").innerHTML = "$" + formatPrice(totalAmount);
    document.querySelector(".est-monthly-payment").innerHTML = "$" + formatPrice(monthlyPay);
    document.querySelector(".apr-value").innerHTML = "Estimated APR " + ((apr * 100).toFixed(2)) + "%";
}

function formatPrice(value) {
    value = Intl.NumberFormat('en-US').format(value);
    sepVals = String(value).split(".");
    var newStr = "";
    if(sepVals.length == 2) {
        if(sepVals[1].length == 1) {
            return value + "0";
        } else {
            return value;
        }
    } else {
        return sepVals[0] + ".00";
    }
}

