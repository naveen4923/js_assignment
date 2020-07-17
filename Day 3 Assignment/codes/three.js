console.log("Hello");
// Question 3

//using conditional statements
let marks = +prompt();
 
 console.log(marks);
 if (marks>=70&&marks<=100) {
  console.log(`marks is ${marks} and grade is A+`);   
 }else if (marks>=50&&marks<=70) {
     console.log(`marks is ${marks} and grade is B`)
 } else {
    console.log(`marks is ${marks} and grade is C`)
 }
//using switch or ternary operator

//using ternary operator
console.log(marks);
console.log(marks == 50? 'marks is 50 and grade is B':'marks is less and grade is c' );

//using switch
console.log(marks);
switch (marks) {
    case 50:
        console.log("marks is 50 and grade is B");
        break;
    case 40:  
         console.log("marks are less and grade is c");  
   
    default:
        console.log("fail");
        break;
}
