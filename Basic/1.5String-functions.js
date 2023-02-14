var line= "john is a good boy";
console.log(line.length);
console.log(line.indexOf("oo"));
console.log(line.slice(2,6)); // hni because the last item is not included here is 6 slice allows negative indexs also but substring did not allow it 
console.log(line.substring(2,6)); // same as slice above
console.log(line.substr(2,5));//starting index and number of characcter want next index here is 2 include
console.log(line.toUpperCase());
console.log(line.toLowerCase());
var data=("  today is a    Good Day");
console.log(data);
console.log(data.trim()); // remove the leading and Trailing i.e back side spaces
console.log(line);
var newLine=line.replace("john","Ayush"); //replace the value and create the new string does not affect original string
console.log(newLine);
console.log(line);
console.log(newLine.charAt(3));
console.log(newLine[2]);
console.log(newLine.charCodeAt(3));
