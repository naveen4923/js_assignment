// Q 3:

fetch('https://jsonplaceholder.typicode.com/todos?completed=true')
.then(response=>response.json())
.then(data=>console.log(data));