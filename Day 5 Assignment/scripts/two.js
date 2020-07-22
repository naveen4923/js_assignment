//Question 2


class User{
    constructor(name,age,email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins = 0;
        this.courses = []
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged Out`);
        return this;

    }
    coins(){
        console.log(`${this.luCoins} coins`);
        return this;
    }
}

let user1 = new User('Vimala',20,'vimala@gmail.com')
let user2 = new User('Balaraju',24,'bal@gmail.com');
user1.login().getdetails().logout();
let users = [user1,user2,mod,admin];
users.forEach(ele=>{
    console.log(ele);
})


class Modarator extends User{
    deletUser(user){
        users = users.filter(u => {
            return u.email != user.email;})
    }
    addcoins(user,coins){
        console.log(user)
        user.luCoins = Number(user.luCoins)+coins;
        return user.luCoins;
    }
    removecoins(users,coins){
        return users.luCoins-coins;
    }
}

let mod = new Modarator('Berline',24,'b@123.com')
mod.deletUser(user1);
mod.addcoins(user1,4);
mod.addcoins(user1,4);

class Admin extends Modarator{
    addcourses(user,course){
        user.courses.push(course)
        console.log(user)
    }
}

let admin = new Admin("MUNI",121,'munoi@god.com')

admin.addcourses(user1,'Java')
admin.addcourses(user1,'Javascript')
admin.addcourses(user1,'Python')

admin.removecourses(user1,'Java')