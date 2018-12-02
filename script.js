/*
The houses of Westeros are meeting to negotiate a peace treaty and they need a record of who attended.

Goal: determine which array methods to use to accomplish the task

Task: Given the array of people, create the list of houses and it's members that attended the summit. You will need to format the raw people data and write the render function.

Hint: write a function to format your data to simplify the functionality in the render function

Bonus points: the Houses and their members are alphabetized
*/

// raw data
let people = [
	{
		firstName: 'Robb',
		lastName: 'Stark',
		allegiance: 'House Stark'
	},
	{
		firstName: 'Danerys', 
		lastName: 'Targaryen', 
		allegiance: 'House Targaryen'
	},
	{
		firstName: 'Cersei', 
		lastName: 'Lannister', 
		allegiance: 'House Lannister'
	},
	{
		firstName: 'Jon', 
		lastName:'Snow', 
		allegiance: 'House Stark'
	},
	{
		firstName: 'Tyrion', 
		lastName: 'Lannister', 
		allegiance: 'House Targaryen'
	},
	{
		firstName: 'Arya', 
		lastName: 'Stark', 
		allegiance: 'House Stark'
	}
];

const houseStark = people.filter(person => person.allegiance == 'House Stark');
const houseTargaryen = people.filter(person => person.allegiance == 'House Targaryen');
const houseLannister = people.filter(person => person.allegiance == 'House Lannister');


function displayNames(people) {
	return people.map(person => person.firstName + " " + person.lastName)
		.join('<br/>');
}

document.querySelector('#test').innerHTML = `
	  ${displayNames(houseStark)} 
<br/> ${displayNames(houseTargaryen)}
<br/> ${displayNames(houseLannister)} `
/* replace the return value with a string of html to display on the DOM
Feel free to add parameters, as needed.
*/

/*function render() {
	return `<div>${displayNames(houseStark)}</div>`

}
*/
//document.querySelector('div').insertAdjacentHTML('afterbegin', render());
