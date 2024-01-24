// Make sure we have the JS file with us
console.log("JS is ready");

// document.getElementById()
// selects an HTML element via its id.
let pineapple = document.getElementById('pineapple');

// Change the content in-between html tags
pineapple.innerHTML="Pineapple fits to be on top pizza."; 

// Change the style of the HTML tag
pineapple.style.backgroundColor = "yellow";

// document.getElementsByClassName()
// selects all the HTML elements via their class.

let hamburguers = document.getElementsByClassName('hamburguer');

// ... -> spread Operator: collects all elements and spread them into a new non-primitive data type - in this case, an array.

hamburguers = [...hamburguers];

hamburguers.forEach((hamburguer)=>{
    hamburguer.innerHTML="I'm an hamburguer!";
})

// document.querySelector(): searches an element via its CSS selector
let pizza = document.querySelector("#pizza");

pizza.innerHTML="Mamma mia!";

let firstHamburguer = document.querySelector(".hamburguer");

firstHamburguer.innerHTML="I was the first!";

// document.querySelectorAll(): searches all elements via its CSS selector
let allQueryHamburguers = document.querySelectorAll('.hamburguer');

allQueryHamburguers.forEach((hamburguer)=>{
    hamburguer.style.backgroundColor="aliceblue";
})

// .getAttribute() returns the HTML attribute from the HTML tag you chose. 
console.log(firstHamburguer.getAttribute('class'));

// .setAttribute() changes the attribute's value.
firstHamburguer.setAttribute('class', 'first-hamburguer');

// .removeAttribute() removes the attribute that you want. 
firstHamburguer.removeAttribute('class');

// Insert HTML elements inside an already created HTML tag. 

// Create an HTML element
let pepperoni = document.createElement('h2');
pepperoni.innerHTML = "Pepperoni";

// Get Pizza Div
let pizzaDiv = document.getElementById('pizza');

pizzaDiv.appendChild(pepperoni);

/* Events */
// Event: an action that happens in your web app. 

// Examples of events: click (clicking a button), load (loading the whole document), focus (focusing on an input by clicking it), submit (submit a form), change (change input's value). 

let button = document.getElementById('click-button');

button.onclick = function(){
    window.alert("Hello, user! Please, at least, don't put banana on pizza.")
}