
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


