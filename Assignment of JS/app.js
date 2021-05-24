//  function printVariable(name)
//  {
//     let name1 = name;
//     console.log(name1);
//  }
//  console.log('Hello World');
//         var a = '10';
//         var v = "Muntaha";
//         console.log(v+a);
    

      //   let name2 = prompt("What is your name ?");
      //   if (name2== "Muntaha")
      //   {
      //      alert("Name is not Equal to ABC");
      //   }
      //   else{
           
      //      alert("Name  ABC");

      //   }


      // function and button task
      function printColorR()
{
   alert("This is the alert for RED button");
}
      function printColorB()
{
   alert("This is the alert for BLUE button");
}
      function printColorG()
{
   alert("This is the alert for  Green button");
}


// variable task 

document.write("<br> <br> 2. Topic: JS Variables   ");
document.writeln("<br><br>1: Problem Name: DefineVariables<br>");
let name= "Muntaha";
let no = 100;
let t= true;
document.writeln("Name  "+ name);
document.writeln("<br>      Number  "+no);
document.writeln("<br> Boolean type  "+t);
console.log( "Name is " + name +  + "\n" +  "\n   Number is  " + no + "\n  Status  is  "+ t);


document.writeln("<br>     <br>2. Problem Name: DefineConstants<br>");
const PI = 3.14;
const world = "Earth";
const tr = true;
document.writeln(PI +"<br>"+ world+"<br>"+ tr);


// document.writeln(" <br>3. Problem Name: AddVariables");
let no1= 12;
let no2 = 4;
let sum= no1+no2;
console.log("Sum"+sum);


//Problem Name: DocumentObjectModel
var x = 5, y = 10, z = 15;
document.writeln("  <br>  3. Topic: Operators:");
document.writeln("  <br>  var x = 5, y = 10, z = 15;");
document.writeln("  <br>  x+y :"+'    ' +  (x+y));
document.writeln("  <br>  y-x :" +  (y-x));
document.writeln("  <br>  x*y :" +  (x*y));
document.writeln("  <br>  y/x :" +  (y/x));
document.writeln("  <br>  x % 2 :" +  (x % 2));
document.writeln("  <br>  x++ :" +  (x++));
document.writeln("  <br>  x-- :" +  (x--));

document.writeln(" <br>  <br>   2. What will be the output of following:<br>");

document.writeln(" <br>  var a = 5, b = 10, c = 5   <br>");
var a = 5, b = 10, c = 5
var x = a;
document.writeln("<br> var x = a;");
document.writeln("   <br>  a == c;" + (a == c));
document.writeln("  <br>  a === c;" + (a === c));
document.writeln(" <br>  a == x; "+(a == x) );
document.writeln(" <br>  a != b;+ "+(a != b) );
document.writeln(" <br>  a > b; "+(a > b) );
document.writeln(" <br>  a < b;"+ (a < b) );
document.writeln("<br>  a >= b; " + (a >= b) );
document.writeln("<br>  a <= b; " + (a <= b) );
document.writeln("<br>  a >= c; " + (a >= c) );
document.writeln("<br>  a <= c; " + (a <= c) );


document.writeln(" <br>  3. Write a program that uses logical and assignment operators.<br>" );

let operant1 = 10;
let operant2 = 20;
let x1=30;
let summ = x1 && (operant1+operant2)
document.writeln("operant1 = 10;  <br> operant2 = 20;  <br>");
document.writeln(operant1 +"+"+ operant2+ "="+  (summ)  );


document.writeln("<br>   4. Write a program that converts degree to fahrenheit and fahrenheit to degrees.");
document.writeln("<br>   F = ( 1.8 * C) + 32.");
document.writeln("<br>   c = (F- 32)/1.8.   <br>");


function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
  document.writeln(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    document.writeln(message+"<br>");
} 
cToF(60);
fToC(45);

document.writeln("<br>    5. Write a program that takes two variables and prints the sum of it." )
var num1 = 12;
var num2 = 2;

document.writeln("<br> var no1 = 12;  " +"var no2 = 2;")
document.writeln("<br> "+ ( num1 +  num2 ));
