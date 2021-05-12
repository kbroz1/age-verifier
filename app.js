// Try to complete the exercise: Write a JS conditional that returns the following block of code: 
// If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":


var hour= new Date().getHours();
//new Date and .getHours is a built in JavaScript method - new Date will get date from server, getHours will get time
var greeting;

if(hour < 18){
     greeting = "Good Day!";
}
else {
    greeting = "Good Evening!";
}
alert (greeting);


document.write('Hello World'+'<br/>');
document.write('Hello World'+'<br/>');
document.write('Hello World'+'<br/>');
document.write('Hello World'+'<br/>');
document.write('Hello World'+'<br/>');
document.write('Hello World'+'<br/>');
document.write('Hello World'+'<br/>');
document.write('Hello World'+'<br/>');
document.write('Hello World'+'<br/>');
document.write('Hello World'+'<br/>');
//for loop. Offers quick way to repeat something over again. 
for(let i=0;i < 10;i++){
    document.write('Hello World'+'<br/>');
}

for(i=0;i<10;i++){
    if (i===7){
//This says - start at 0, stop at 10, increment by 1; If statement means stop at 7
        break;
    }
}
document.write("The number is" + i  + "<br>");
//will return The number is 7

//while loop:
var x=0;
while (x<5) {
    console.log(x);
x = x + 1;
};

//won't work because the statement is not trure (x is more than 5)
var x=5;
while (x<5){
    console.log(x);
    x = x + 1;
}

//this loop below outputs "0 is even, 1 is odd, 2, is even, etc"

//var=let
for(let i=0;i < 20;i++){
    if (i % 2 == 0){
    document.write(i +" is even" + "<br>")
    }
    else {
        document.write(i + " is odd" + "<br>")
    }
}

// var money = 1500.00;
// var bills = 2500.00;

// if (money > bills) || (money === bills) {
//     document.write("You are Covered!")
// }

// else if (money === bills) || (money < 2000){
//     document.write("you're good, just barely")
// }

// else {
//     document.write ("uh-oh!")
// };


//Grade checker:
//using if else statements: 
// function assignGrade(score){
//     if (score > 90){
//         return 'A';
//     }
//     else if (score > 80){
//         return 'B';
//     }
//     else if (score > 70){
//         return 'C';
//     }
//     else if (score > 60){
//         return 'D';
//     }
//     else {
//         return 'F';
//     }
// }
//  document.write ('Your grade is ' + assignGrade(78) + "<br>");
//  document.write ('Your grade is ' + assignGrade(92)+ "<br>");
//  document.write ('Your grade is ' + assignGrade(51)+ "<br>");


 //Grade checker:
 //Turn Grade Checker with Switch
 var score = 75;
 //put score you want to evaluate above into a variable
 switch (true) {
     case (score > 90):
 document.write ("You got an A.")
 //put your conditions and where you want the code to show up between case and break
       break;
     case (score > 80):
 document.write ("You got a B.")
       break;
     case (score > 70):
 document.write ("You got a C.")
       break;
     case (score > 60):
 document.write ("You got a D.")
       break;
     default:
         document.write("You failed");
   }

 //Age Verifier

 var age = prompt("What is your age?");
if (age >= 18) alert('Welcome!')
else {
    alert('Sorry! Come back in a few years!')
    document.location.href="young.html";
}

