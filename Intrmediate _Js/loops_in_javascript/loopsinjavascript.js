// let x=10;
// let sum=0;
// function sumofNum(){
//     for(var i=0;i<=x;i++){
//         sum=sum+i;
//         console.log(sum);
//     }

// }
// sumofNum();


let arr=[1,2,3,4,5,6];
arr.forEach(function test(a){
    console.log(a);
})

console.log("using 'of' loop");
for(array of arr){
    console.log(array);
}
// for (keyin  objects){ console.log(student[key])}

// while loop
console.log("while loop")
// let c=0;
// while(c<5){
//     console.log(c);
//     c++;
// }
console.log("Do While loop");
let i=0;
do{
    console.log(i);
    i++;
}
while(i<5);