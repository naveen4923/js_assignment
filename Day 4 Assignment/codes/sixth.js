console.log("Hello 6")
//Q 6


let num = 0
while(num<=100 ) {
    num = prompt("Enter the number greater than hundred");
    if(num == null){
        num = (num == null ) ? "Then cancel":"its not cancelled";
        console.log(num)
}
else if(num>100){
console.log(num)
}
}