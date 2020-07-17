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

//using switch
console.log(marks);
switch (marks) {
    case marks:
        if (marks>=70&&marks<=100){
        console.log(`marks is  ${marks}  and grade is A+`);
        break;}

    case marks :  
    if (marks>=50&&marks<=70) {
    console.log(`marks is  ${marks} and grade is B`);
    break;
    }
    default:
        console.log("fail");
        break;
}
