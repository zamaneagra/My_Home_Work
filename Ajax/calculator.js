/////////////////////////////////////////////
///////////// LOAN CALCULATOR //////////////

function calculateLoan() {
        // suma imprumutului
    var loanAmount = parseInt (document.getElementById("loanAmount").value);
        // termen imprumut
    var loanTerm = parseInt (document.getElementById("loanTerm").value);
        // dobinda anuala
    var loanInterestRate = parseInt (document.getElementById("loanInterestRate").value);
        // suma imprumutului lunar
    var loanAmountPerMonth = loanAmount / loanTerm;
        // dobinda lunara
    var loanInterestRatePerMonth = loanInterestRate / 12 / 100;
        // variabile temporare
    var a = loanAmount * loanInterestRatePerMonth;
    var b = 1 + loanInterestRatePerMonth;
    var c = -loanTerm;
    var d = Math.pow(b, c);
        // dobinda lunara
    var interestAmountPerMonth = (a/(1-d)) - (loanAmount/loanTerm);
        // rambursare lunar
    var loanPerMonth = interestAmountPerMonth + loanAmountPerMonth;

    document.getElementById("loanPerMonth").innerHTML = loanPerMonth.toFixed(2) + ' Euros';
}

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