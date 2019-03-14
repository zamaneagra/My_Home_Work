function getAge (ageOfPerson) {
	var currentYear =  new Date().getFullYear();
	var personsAge = currentYear - ageOfPerson;

	return personsAge;
}

function getFullNameString(firstName, lastName) {
    return firstName + " " + lastName;
}

function getFullNameFromObject(userObject) {
    return userObject.firstName + " " + userObject.lastName + " " + userObject.age + " years old";
}


var personOneAge = getAge(1983);
var personTwoAge = getAge(1995);
var fullName = getFullNameString('Luca', 'Dorin');
var person = {
    firstName: 'Luca',
    lastName: 'Dorin',
    age: 23
}

//console.log(personOneAge);
//console.log(personTwoAge);
//console.log(fullName);
console.log(getFullNameFromObject(person));


