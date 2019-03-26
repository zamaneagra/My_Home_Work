////////////////////////////////////////////////////////////////
/////////////// LOAN CALCULATOR SLIDER ////////////////////////

    var sliderLoan = document.getElementById("LoanRange");
    var outputLoan = document.getElementById("myLoanRange");
    outputLoan.innerHTML = sliderLoan.value;
    sliderLoan.oninput = function () {
        outputLoan.innerHTML = this.value;
    }

    var sliderMonths = document.getElementById("LoanMonthsRange");
    var outputMonths = document.getElementById("myLoanMonthsRange");
    outputMonths.innerHTML = sliderMonths.value;
    sliderMonths.oninput = function () {
        outputMonths.innerHTML = this.value;
    }

    var sliderInterest = parseInt(document.getElementById("LoanInterest").value);
    var sliderComision = parseInt(document.getElementById("loanComision").value);

function getSliderLoan() {
        // loan amount
    var myLoanRange = parseInt(document.getElementById("LoanRange").value);
        // loan term
    var LoanMonthsRange = parseInt (document.getElementById("LoanMonthsRange").value);
        // yearly interest
    var LoanInterest = parseFloat (document.getElementById("LoanInterest").value);
        // comision
    var loanComision = parseFloat(document.getElementById("loanComision").value) / 100;
    console.log(loanComision);
        // monthly amount loan
    var loanAmountPerMonth = myLoanRange / LoanMonthsRange;
        // monthly amount comision
    var loanComisionPerMonth = loanComision * myLoanRange;
        // monthly interest
    var loanInterestRatePerMonth = LoanInterest / 12 / 100;
        // temporary variables
    var a = myLoanRange * loanInterestRatePerMonth;
    var b = 1 + loanInterestRatePerMonth;
    var c = -LoanMonthsRange;
    var d = Math.pow(b, c);
        // monthly interest
    var interestAmountPerMonth = (a/(1-d)) - (myLoanRange/LoanMonthsRange);
        // monthly amount
    var loanPerMonth = interestAmountPerMonth + loanAmountPerMonth + loanComisionPerMonth;
    var interest = interestAmountPerMonth * LoanMonthsRange;
    var comison = loanComision * myLoanRange * LoanMonthsRange;
    var totalCost = comison + interest;
    var total = comison + interest + myLoanRange;
    document.getElementById("loanSliderPerMonth").innerHTML = loanPerMonth.toFixed(2) + ' Euros';
    document.getElementById("interestLoan").innerHTML = interest.toFixed(2)  + ' Euros';
    document.getElementById("comisionLoan").innerHTML = comison.toFixed(2) + ' Euros';
    document.getElementById("cost").innerHTML = totalCost.toFixed(2) + ' Euros';
    document.getElementById("total").innerHTML = total.toFixed(0) + ' Euros';

}

window.onload = getSliderLoan;



////////////////////////////////////////////////////////////////
///////////////  CALCULATOR for your bill ////////////////////////

$(function () {
    //Hide the tip amount on load
    $('#each').hide();
    $('#totalTip').hide();
});

function calculateTip() {
    var billAmt = $('#billamt').val();
    var serviceQual = $('#serviceQual').val();
    var numOfPeople = $('#peopleamt').val();

    //validate input
    if (billAmt === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        $('#each').hide();
    } else {
        $('#each').css('display', 'block');
    }

    //Calculate tip
    var total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    $('#totalTip').css('display', 'block');
    $("#tip").html(total);
}



