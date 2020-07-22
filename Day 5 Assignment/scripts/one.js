// Q 1:

let num = +prompt("Enter a Positive number");
let number = []
for(let i =1;i<=num;i++){
    number.push(i);
}

odd = number.filter(el=>el%2!=0).map((el)=>(el**3))

console.log(odd)