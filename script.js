'use strict';
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

//put house names into an array without repeating any that are already there
function getHouse(){
    const houseList = [];
         people.forEach(function(person, allegiance){
         if (houseList.indexOf(person.allegiance) === -1) {
             houseList.push(person.allegiance);
        }
        
   });
    
    return houseList;
}//end getHouse


//function to display the name of the house and any people who are in that house
function displayHouse(houseName, people){
    //write loop through list of people 
      //and print out name of house and any people whose allegiance = name of house
    
    let names = people.reduce(function(acc, person){
        if(person.allegiance === houseName){
             return  acc + '<li>' + person.firstName + " " + person.lastName + '</li>';
         }
          return acc
     }, " ");
         
	return `<div>
                <b>${houseName}</b>
                <ul>
                   ${names}
                </ul>
             </div>`
}//end displayHouse

//saves function to a variable so I have access to the houseList array
let houseList = getHouse(); 
//reference to the html where I'd like to display the data from the displayHouse() function
let wrapper = document.querySelector('#wrapper');

//for loop inserts the html created by the display house function
for(let i = 0; i < houseList.length; i++){
    wrapper.insertAdjacentHTML('beforeend', displayHouse(houseList[i], people));
   
}
