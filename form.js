// // pattern="[A-Za-z]{3}"
// //   pattern="[A-Za-z]{3}"
// //    maxlength="10"
// // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}
// // A form with a password field that must contain 8 or more characters that are of at least one number, and one uppercase and lowercase letter
// // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
// // email pattern
// // Defining a function to display error message

// //defines a function to display the error message, if there is an error with the input
// function printError (elemID, hintMsg){
//     document.getElementById(elemID).innerHTML = hintMsg;
// }
// // Defining a function to validate form 

// function validateForm() {
// // Retrieving the values of form elements 

// //the name of the form in html is contactForm
//     const name = document.contactForm.name.value;
//     const email = document.contactForm.email.value;
//     const mobile = document.contactForm.mobile.value;
//     const country = document.contactForm.country.value;
//     const gender = document.contactForm.gender.value;
//     const hobbies = [ ];
//     const checkboxes = document.getElementsByTagName('hobbies[]');
//     //the for loop will loop through all checkboxes and if there are any checkboxese that are checked, it will push the 
//     // value of the checked box
//     for (let i=0; i < checkboxes.length; i++) {
//         //.checked is a method that identifes the checked box
//         if(checkboxes[i].checked) {
//             hobbies.push(checkboxes[i].value)
//         }
//     }
// }
    
  
    
//     // Defining error variables with a default value

//     //if any of these variables equal false ...
//     var nameErrr= emailErr= moileErr= countryErr= genderErr=false;
// //validate name
// // //if name is equal to empty string.. if it is left blank.. then printError function is called and will print out 
// // the message "Please Enter a Valid Name"
// if(name==" ") {
//     //nameErr matches id from HTML
//     printError("nameErr", "Please Enter a Valid Name")
// } else {
//     //regex pattern (look this up)
//     var regex= /^[a-zA-Z\s]+$/;
//     if(regex.test(name) === false) {
//         printError("nameErr", "Please enter a valid name");
//     } else {
//         //if the name is not blank and iit fits the pattern, returns blank/empty string, won't say anything
//         printError("nameErr", "")
// nameErr=false;
//     }
// }
   
//     // Validate name
  
    
//     // Validate email address
//     if(email == "") {
//         //nameErr matches id from HTML
//         printError("emailErr", "Please Enter a Valid Name")
//     } else {
//         //regex pattern (look this up)
//         var regex= /^[a-zA-Z\s]+$/;
//         if(regex.test(email) === false) {
//             printError("emailErr", "Please enter a valid name");
//         } else {
//             //if the name is not blank and iit fits the pattern, returns blank/empty string, won't say anything
//             printError("emailErr", "")
//     emailErr=false;
//         }
//     }
       
    
    // Validate mobile number
   
    
    // Validate country
   
    
    // Validate gender
    
    
    // Prevent the form from being submitted if there are any errors
    
        // Creating a string from input data for preview
       
        // Display input data in a dialog box before submitting the form
//FORM: 
// pattern="[A-Za-z]{3}"
//   pattern="[A-Za-z]{3}"
//    maxlength="10"
// pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}
// A form with a password field that must contain 8 or more characters that are of at least one number, and one uppercase and lowercase letter
// pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
// email pattern
// Defining a function to display error message

//defines a function to display the error message, if there is an error with the input
function printError (elemID, hintMsg){
    document.getElementById(elemID).innerHTML = hintMsg;
}

// Defining a function to validate form 

function validateForm() {
// Retrieving the values of form elements 

//the name of the form in html is contactForm
    const name = document.contactForm.name.value;
    const email = document.contactForm.email.value;
    const mobile = document.contactForm.mobile.value;
    const gender = document.contactForm.gender.value;
    const checkboxes = document.getElementsByName('hobbies[]');
    //the for loop will loop through all checkboxes and if there are any checkboxese that are checked, it will push the 
    // value of the checked box
    for (let i=0; i < checkboxes.length; i++) {
        //.checked is a method that identifes the checked box
        if(checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value)
        }
    }

    
  
    
    // Defining error variables with a default value

    //if any of these variables equal false ...
    var nameErr = emailErr = moileErr = genderErr = true;
//validate name
// //if name is equal to empty string.. if it is left blank.. then printError function is called and will print out 
// the message "Please Enter a Valid Name"
if(name == "") {
    //nameErr matches id from HTML
    printError("nameErr", "Please enter your name")
} else {
    //regex pattern (look this up)
    var regex= /^[a-zA-Z\s]+$/;
    if(regex.test(name) === false) {
        printError("nameErr", "Please enter a valid name");
    } else {
        //if the name is not blank and it fits the pattern, returns blank/empty string, won't say anything
        printError("nameErr", "")
        nameErr=false;
    }
}
   
  
    
    // Validate email address
    if(email == "") {
        //nameErr matches id from HTML
        printError("emailErr", "Please enter a valid email address")
    } else {
        //regex pattern (look this up)
        var regex= /^\S+@\S+\.\S+$/;
        //regex.test tests the pattern of the input to make sure it matches the format from the regex pattern
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email");
        } else {
            //if the name is not blank and iit fits the pattern, returns blank/empty string, won't say anything
            printError("emailErr", "")
            emailErr = false;
        }
    }
       
    
    // Validate mobile number
    if(mobile == "") {
        //nameErr matches id from HTML
        printError("mobileErr", "Please enter your mobile number")
    } else {
        //regex pattern (look this up)
        var regex= /^[1-9]\d{9}$/;
        //regex.test tests the pattern of the input to make sure it matches the format from the regex pattern
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            //if the name is not blank and iit fits the pattern, returns blank/empty string, won't say anything
            printError("mobileErr", "")
            mobileErr = false;
        }
    }

    
   
    
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    
    // Prevent the form from being submitted if there are any errors
    //If there are any errors, it will stop it from being submitted and will return the hint messages with the error 

    if((nameErr || emailErr || mobileErr  || genderErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        //shows and confirms to user that form has been filled out
        var dataPreview =   "You've entered the following details: \n" +
                            "Full Name: " + name + "\n" +
                            "Email Address: " + email + "\n" +
                            "Mobile Country: " + mobile + "\n" +
                            "Gender: " + gender + "\n";         
        if(hobbies.length) {
            dataPreview += "Newsletter: " + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};
        
