const calculate=()=>{

    let num1=document.querySelector("#num1").value;
    let num2=document.querySelector("#num2").value;
    let opr=document.querySelector("#operation").value;
    if(num1== ''|| num2==''){
        alert("One or More fiedld is empty !");
        return;
    }
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    let result=0.0;

   
    if (opr === 'add') {
        result = num1 + num2;
    } else if (opr === 'sub') {
        result = num1 - num2;
    } else if (opr === 'div') {
        result = num1 / num2;
    } else if (opr === 'mul') {
        result = num1 * num2;
    }
    else if (opr === 'mod') {
        result = num1 % num2;
    }

    document.querySelector("#result").innerHTML = `Result is : ${Math.round(result)}`;
}