 console.log("Hello");
// Q 7

let number = prompt("Enter the range of the nuber ",'1-25');
n = number.length
console.log(n)
number = number.split('-');
number = number[1]
function prime(number) {
    var store = [],i,j,primes = [];
    
    for (i =2;i<=number; i++){
        if(!store[i]){
            primes.push(i);
            for(j=i << 1; j<=number;j+=i){
                store[j] = true
            }
    }
 }
 return primes;
}
console.log(prime(number))