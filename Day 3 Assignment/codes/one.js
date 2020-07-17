console.log("Hello");
//Question 1
let num = +prompt("Enter a Number", '0');

function check(numbers) {
    let checker ;
    if (num % 2 == 0){
        checker = 'even';
        return checker;
    }
    else{
        checker = 'odd';
        return checker;
    }
    
}
let variable = check(num);

console.log(`The Number entered is ${num} and Number is ${variable}`);
