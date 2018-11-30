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


/* replace the return value with a string of html to display on the DOM
Feel free to add parameters, as needed.
*/


people.forEach(function(person){
	if(person.allegiance === "House Stark"){
		return person.allegiance;
	}
	const testdiv = document.querySelector('#test');
	testdiv.innerHTML = `<b>${person.allegiance}</b> 
	<div>
		<ul>
			<li>${person.firstName} ${person.lastName}</li>
		<ul>
	</div>`
});
/* Why does ^^ give me house Targaryen and only one of the two Targaryen people? */

//filter house stark into an array called Stark
const Stark = people.filter(function(person){
	if(person.allegiance === "House Stark"){
		return person.allegiance;
	}
}); 
console.log(Stark);

//filter house targaryen into an array called Targaryen
const Targaryen = people.filter(function(person){
	if(person.allegiance === "House Targaryen"){
		return person;
	}
});
console.log(Targaryen);

//filter house lannister into an array called Lannister
const Lannister = people.filter(function(person){
	if(person.allegiance === "House Lannister"){
		return person;
	}
});
console.log(Lannister);


function render() {
	return '<div>string of html to display on the dom</div>'

}

document.querySelector('div').insertAdjacentHTML('afterbegin', render());



/*const houses = people.map(function(person){
	 return person.allegiance;
});
console.log(houses)
*/