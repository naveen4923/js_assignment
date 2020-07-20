//Q 2:
const  student = {
    name : "Helsinki",
    age : 24,
    projects : {
        diceGame : "Two Player dice game using JavaScript"
    }
}

const { name, age , projects : {diceGame} } = student;

console.log(name +'\n'+ age+'\n'+diceGame);