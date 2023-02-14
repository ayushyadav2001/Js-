// function changeColor(){
//     // alert("Color Changes")

//     let headerElement=document.getElementById("header");
//     // let r=90;
//     // let g=59;
//     // let b=60;
//     // headerElement.style.backgroundColor="RGB(r,g,b)";

//     headerElement.style.backgroundColor="red";
//     headerElement.style.change="gold"
   
// }
function changeColor(){}
let hT=document.getElementById("header-text");
if(hT != red){
    hT.style.color='red';

}
else{
    hT.style.color='orange';
}
function changeText(){
let hT=document.getElementById("header-text");
let cT=document.getElementById("Header_change_text");
hT.innerHTML=cT.value;


// hT.innerHTML="Ayush"

}
// let sT=document.getElementById('fullName');
// sT.addEventListener("change", function test(){
//     let someText=document.getElementById("someT");
//     someText.innerHTML=sT.value;

// });
function Magic(){
    let magicBtn=document.getElementById('bodyElement');
    if(magicBtn.style.backgroundColor !== "orange"){
        magicBtn.style.backgroundColor='orange';
    }
   else{
    magicBtn.style.backgroundColor='#ffffff';

   }
    
}