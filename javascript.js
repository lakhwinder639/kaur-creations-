function abcd(a)
{
    console.log(a);
}  

var arr = [11,12,31,435,56];

// ek se jaada bande ki baat ki to hua array, ek bande ke baare meun
// blank object 
var a = 12; 


//2 a = filled object 
var ghadi = {
    brand: "Kenneth Cole",
    price: "16K",
    color: "silver",
    type: "automatic",
    digital: false,
    }


ghadi.brand = "Titan kenneth Cole";

//js lang mein kuch cheeje nahi he jo hum use kar sakte hia sur wo 
//chheze hame js se nahi balke broswer se milti he aese sare features 
//jo js part nahi he aur phir bi hum use kar sakte hum unhe ham ddnund sakte he 
//particular objevct jis ka nam he windos. 



//stack 
/*jitne bhi ham variables ya data hum banate hae unhe kahi to store krna package
padta for that there is heap memory 
10
1+2+3+4+5+6;
*/


//execution context  matlab jab bhi ham function chale gee function 
//apna khud ka ek imaginary container bannale ga jisme uski theen chize hongi 
//1) variables 
//2) function inside the parent function 
//3) lexical environment of that function 

function abcd(){
    var a = 12;
    function def(){
        var b = 12;
    }
}

//herer abcd will have the execution context in whihc at the top would 
//be the varibale inside hime like the var a and avar b after t/
//there would be function inside the parent function like the def() whose parent function is 

if (7) 
{
  console.log("hey");
}// js mein kuchh bhi likho wo mainly do parkar main se ik parkar ko belong krti he
else 
{
    console.log("hello");
}