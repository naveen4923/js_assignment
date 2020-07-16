// Question 2 : Explain with example  remaing methods of String and Array


// SEARCH : is used to search the element and print the index

let str = "We can lear java script as fast as its easy to understand    ";

console.log(str.search("java"));

// SLICE : this method will print the string  in the given length. 

console.log(str.slice(7,23));

// SUBSTRING : the sub will be printed in the length given. 

console.log(str.substring(23,31));

console.log(str.substr(32));

// Replacing : the method will replace  the given string with new string mentioned. 

console.log(str.replace("as fast as","as quickly because" ));

//trim : this method will remove the extra space at the end. 

console.log(str.trim());

var fruits = ['banana','orange']

// join : join method will join the elements  in the array 
console.log(fruits.join('*'));

// tostring : this method convert the array to string
console.log(fruits.toString());

// changing the element
fruits[0] = 'mango';
console.log(fruits)
