function getLargestNumber(listOfNumbers) {
    var temporaryLargestNumber =0;

    for (var i=0; i < listOfNumbers.length; i++) {
        var numberFromList = listOfNumbers[i];

        if (numberFromList > temporaryLargestNumber) {
            temporaryLargestNumber = numberFromList;
        }
    }

    return temporaryLargestNumber;
}

var numbers = [9, 100, 75, 32, 122, 8, 65];

var largestNumber = getLargestNumber(numbers);

console.log(largestNumber);