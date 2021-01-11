// Assignment 3

// 1) Select the section with an id of container without using querySelector.
const one = document.getElementById('container');
console.log(one);

// 2) Select the section with an id of container using querySelector.
const two = document.querySelector("#container");
console.log(two);

// 3) Select all of the list items with a class of "second".
const three = document.getElementsByClassName('second')
console.log(three);

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
const four = document.getElementById("container").lastElementChild.lastElementChild;
console.log(four);

// 5) Give the section with an id of container the text "Hello!".
let five = document.getElementById('container');
five.innerText = "Hello!";
console.log(five);

// 6) Add the class main to the div with a class of footer.
const six = document.querySelector(".footer")
six.classList.add("main");
console.log(six);

// 7) Remove the class main on the div with a class of footer.
six.classList.remove("main");
console.log(six);

// 8) Create a new li element.
const eight = document.createElement("li");
console.log(eight);

// 9) Give the li the text "four".
console.log(eight.innerText = "four");

// 10) Append the li to the ul element.
let ten = document.querySelector("ul");
console.log(ten.appendChild(eight));

// 11) Loop over all of the lis inside the ol tag and give them a background color of "green".
let temp = document.getElementById("container").lastElementChild;
let eleven = temp.querySelectorAll("li");
eleven.forEach((li) => li.style.backgroundColor = "green");

// 12) Remove the div with a class of footer.
six.parentNode.removeChild(six);
