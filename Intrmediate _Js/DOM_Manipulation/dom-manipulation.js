let mainElement=document.getElementById('main');
console.log(mainElement);

let rightElement=document.getElementById('right');
console.log(rightElement);
console.log(rightElement.innerHTML);

// Get all the Elemet have class layout
let getElements =document.getElementsByClassName('layout'); // return the array of elements
console.log(getElements);
console.log(getElements[2]); // elemt at index number 2
let tagElement=document.getElementsByTagName("li");
console.log(tagElement);
console.log(tagElement[0]);
console.log(tagElement[1]);
console.log(tagElement[2]);
tagElement[2].innerHTML="my orders";
let inputElement=document.getElementById('fullName');
// console.log(inputElement.id);
console.log(inputElement.value);
// inputElement.innerHTML="Rohan";
// let querySelector=document.querySelector("section"); //return first matching section
// console.log(querySelector);
// let querySelector=document.querySelector(".layout"); //return first matching section
// console.log(querySelector);
// let querySelector=document.querySelector("#center"); //return first matching section
// console.log(querySelector);
// let querySelector=document.querySelector("#left >li"); //return first matching section
// console.log(querySelector);
let querySelector=document.querySelector("#left >ul >li"); //return first matching section
console.log(querySelector);
let allQuerySelector=document.querySelectorAll("#left>ul>li");
console.log(allQuerySelector);
querySelector[1].style.color="red"