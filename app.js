// Try to complete the exercise: Write a JS conditional that returns the following block of code: 
// // If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":


// var hour= new Date().getHours();
// //new Date and .getHours is a built in JavaScript method - new Date will get date from server, getHours will get time
// var greeting;

// if(hour < 18){
//      greeting = "Good Day!";
// }
// else {
//     greeting = "Good Evening!";
// }
// alert (greeting);


// document.write('Hello World'+'<br/>');
// document.write('Hello World'+'<br/>');
// document.write('Hello World'+'<br/>');
// document.write('Hello World'+'<br/>');
// document.write('Hello World'+'<br/>');
// document.write('Hello World'+'<br/>');
// document.write('Hello World'+'<br/>');
// document.write('Hello World'+'<br/>');
// document.write('Hello World'+'<br/>');
// document.write('Hello World'+'<br/>');
// //for loop. Offers quick way to repeat something over again. 
// for(let i=0;i < 10;i++){
//     document.write('Hello World'+'<br/>');
// }

// for(i=0;i<10;i++){
//     if (i===7){
// //This says - start at 0, stop at 10, increment by 1; If statement means stop at 7
//         break;
//     }
// }
// document.write("The number is" + i  + "<br>");
// //will return The number is 7

// //while loop:
// var x=0;
// while (x<5) {
//     console.log(x);
// x = x + 1;
// };

// //won't work because the statement is not trure (x is more than 5)
// var x=5;
// while (x<5){
//     console.log(x);
//     x = x + 1;
// }

// //this loop below outputs "0 is even, 1 is odd, 2, is even, etc"

// //var=let
// for(let i=0;i < 20;i++){
//     if (i % 2 == 0){
//     document.write(i +" is even" + "<br>")
//     }
//     else {
//         document.write(i + " is odd" + "<br>")
//     }
// }

// // var money = 1500.00;
// // var bills = 2500.00;

// // if (money > bills) || (money === bills) {
// //     document.write("You are Covered!")
// // }

// // else if (money === bills) || (money < 2000){
// //     document.write("you're good, just barely")
// // }

// // else {
// //     document.write ("uh-oh!")
// // };


// //Grade checker:
// //using if else statements: 
// // function assignGrade(score){
// //     if (score > 90){
// //         return 'A';
// //     }
// //     else if (score > 80){
// //         return 'B';
// //     }
// //     else if (score > 70){
// //         return 'C';
// //     }
// //     else if (score > 60){
// //         return 'D';
// //     }
// //     else {
// //         return 'F';
// //     }
// // }
// //  document.write ('Your grade is ' + assignGrade(78) + "<br>");
// //  document.write ('Your grade is ' + assignGrade(92)+ "<br>");
// //  document.write ('Your grade is ' + assignGrade(51)+ "<br>");


//  //Grade checker:
//  //Turn Grade Checker with Switch
//  var score = 75;
//  //put score you want to evaluate above into a variable
//  switch (true) {
//      case (score > 90):
//  document.write ("You got an A.")
//  //put your conditions and where you want the code to show up between case and break
//        break;
//      case (score > 80):
//  document.write ("You got a B.")
//        break;
//      case (score > 70):
//  document.write ("You got a C.")
//        break;
//      case (score > 60):
//  document.write ("You got a D.")
//        break;
//      default:
//          document.write("You failed");
//    }

//Switch Code from April:
//    function marksgrade()
// {
// grade = document.form1.text1.value;
// switch (grade)
// {
// case 'A+':
// console.log("Marks >= 90");
// break;
// case 'A':
// console.log("Marks [ >= 80 and <90 ]");
// break;
// case 'B+':
// console.log("Marks [ >= 70 and <80 ]");
// break;
// case 'B':
// console.log("Marks [ >= 60 and <70 ]");
// break;
// case 'C':
// console.log("Marks < 60");
// break;
// default:
// console.log("Wrong grade.........");
// }
// }

//switch statement to return the current day

var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";

}
alert(day);



//Age Verifier

var age = prompt("What is your age?");
if (age >= 18) alert('Welcome!')
else {
    alert('Sorry! Come back in a few years!')
    document.location.href = "young.html";
}

// The Recipe Card
// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var Recipe = {
    title: "Peanut Butter and Jelly",
    servings: 1,
    ingredients: ["Bread", "Peanut Butter", "Jelly"]
}
console.log(Recipe.title);
console.log(`Servings: ${Recipe.servings}`);
console.log('Ingredients: ');
for (var i = 0; i < Recipe.ingredients.length; i++)
    console.log(Recipe.ingredients[i]);

//object literal - store the object in a variable
var biography = {
    name: "April",
    age: 30,
    likes: ['rest', 'money'],
    children: true
}

//object constructor - new object keyword
var bio = new Object();
bio.name = "April";
bio.age = 30;
bio.likes = ['rest', 'money'];
bio.children = true

// // // Create an array of objects, where each object describes a book and has properties for the title(a string),
//  author(a string), and alreadyRead(a boolean indicating if you read it yet).
// // // Iterate through the array of books.For each book, log the book title and book author like so: 
// "The Hobbit by J.R.R. Tolkien".
// // // Now use an if/else statement to change the output depending on whether you read it yet or not. 
// If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', 
// and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var books = [
    {title: "Harry Potter ",
    author: "JKR",
    read: false},
    {title: "Lord of The Rings ",
    author: "Token",
    read: true},
    {title: "The War of Art ",
    author: "Steve",
    read: false}
];
for(var i=0; i < books.length; i++) {
    var book=books[i];
    var bookInfo=book.title + "by " + book.author;
    if(book.read) {
        console.log(`You already read ${bookInfo}`)
    } else {
        console.log(`You still need to read ${bookInfo}`);
    }
}

