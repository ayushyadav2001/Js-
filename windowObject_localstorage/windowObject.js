// console.log(window);
// let getPageUrl=()=>{
//     let URL=window.location.hostname;
//     // debugger;
//     console.log(URL);

// }
// getPageUrl();
// let addNum=()=>{
//     let result=5+9;
//     console.log(result);
// }
// addNum();


// let twoNumSum=(num1,num2)=>{
//     let res=num1+num2;
//     console.log(res);

// }

// twoNumSum(a,b);

function calc(){
    let a=document.getElementById("ip1").value;
    let b=document.getElementById("ip2").value;
    a=parseInt(a);
    b=parseInt(b);
    let result=a+b;
    console.log(result);
    localStorage.setItem("Sum",result);
    document.getElementById("output").innerHTML=result;
    document.getElementById('body-c').style.backgroundColor='red';

}

function addTwoNum(){
    
    let emp=JSON.stringify({
        "name":"Vikas",
        "id":111,
        "department":"BN College"
    });
    let result=5+5;
   // it have first input result is a key and another is value i.e 5+5=10
    localStorage.setItem("name","Ayush");
    localStorage.setItem("employe",emp);
    localStorage.setItem("result",result);

}
// session storage is available untill user closes

function addTwoSession(){
    
    let emp=JSON.stringify({
        "name":"Vikas",
        "id":111,
        "department":"BN College"
    });
    let result=5+5;
   // it have first input result is a key and another is value i.e 5+5=10
    sessionStorage.setItem("name","Ayush");
    sessionStorage.setItem("employe",emp);
    sessionStorage.setItem("result",result);

}
 
function getSessionStorage(){
    let name=localStorage.getItem("name");
    let result=localStorage.getItem("result");
    let e=localStorage.getItem("employe");
    console.log(typeof(name));
    console.log(typeof(result));
    console.log(typeof(e));
    let empObj=JSON.parse(e);//convert the string into object 
    console.log(typeof(empObj));
    console.log(empObj);
    const {id,department}=empObj; //object desutructureing
    console.log(id);
    console.log(department);
}
function clearData(){
    localStorage.clear();
}

// cookies

function getSessionStorageSession(){
    let name=sessionStorage.getItem("name");
    let result=sessionStorage.getItem("result");
    let e=sessionStorage.getItem("employe");
    console.log(typeof(name));
    console.log(typeof(result));
    console.log(typeof(e));
    let empObj=JSON.parse(e);//convert the string into object 
    console.log(typeof(empObj));
    console.log(empObj);
    const {id,department}=empObj; //object desutructureing
    console.log(id);
    console.log(department);
}
function clearDataSession(){
    sessionStorage.clear();
}