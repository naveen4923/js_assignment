// Q 5

var salary = 40000;
console.log("The salary of the Sales employees is "+salary);

let salesdone = +prompt("Enter the no of sales u made");

if(salesdone > 20000){
    console.log("The bonus is 20% of your salary - "+(salary*0.2));
}
else if(salesdone >10000 && salesdone <=20000 ){
    console.log("The bonus is 7% of your salary - "+Math.round(salary*0.07));
}
else if(salesdone > 5000 && salesdone <= 10000){
    console.log("The bonus is 5% of your salary - "+Math.round(salary*0.05));
}else if(salesdone<=5000){
    console.log("The bonus is 2% of your salary - "+Math.round(salary*0.02));
}