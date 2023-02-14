// let var1="Ayush";
// console.log("Type of var1 "+typeof(var1));
// let var2=20;
// console.log("Type of var2 "+typeof(var2));
// let var3=40.67;
// console.log("Type of var3 "+typeof(var3));
// let var4=false;
// console.log("Type of var4 "+typeof(var4));
// let var5; // default of js variable is undefine
// console.log("Type of var5 "+typeof(var5));
// let var6=undefined;
// console.log("Type of var6 "+typeof(var6));
// let var7=null;
// console.log("Type of var7 "+typeof(var7)); // null is a Object


let student ={
    "name":"Ayush",
    "Branch":"ECE",
    "Year":"4th",
    rollNumber:191,
    "Age":21
};
console.log(student);
console.log(student["name"]);
console.log(student["Year"]);
console.log(typeof(student));
// console.log(student.name,student.Branch,student.Year);
const {rollNumber , Age}=student;
console.log(rollNumber);
console.log(Age);