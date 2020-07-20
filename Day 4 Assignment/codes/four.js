// Q 4:

var num = prompt("Enter the expression as",'2 + 3');
num = num.split(' ')
console.log(num);
for(let i = 0;i<num.length;i++){
    if(num[i] == '+'){
        console.log(+num[0] + +num[2]);
    }
    else if(num[i] == '-'){
        console.log(+num[0] - +num[2]);
    }
    else if(num[i]=='*'){
        console.log(+num[0] * +num[2]);
    }
    else if(num[i]=='/'){
        console.log(+num[0] / +num[2]);
    }
    else if(num[i]=='%'){
        console.log(+num[0] % +num[2]);
    }
    else if(num[i] == 'sqrt' ){
        for(let i =0;i<num.length;i++){
            if(num[i] =Number(num[i]))
                console.log(Math.sqrt(+num[i]))
        }

    }

}