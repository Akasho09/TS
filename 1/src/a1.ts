// Interfaces 
interface User {
        username : string,
        age : number,
        email ?: string // optional email
}

const user1 = {
        username : "akash" ,
        age : 19
}
function isLegal (user : User){
if (user.age>18){
    return true ;
}
else return false ;
}

function greet (user : User) {
console.log("Hi " + user.username) 
}

console.log(isLegal(user1))
greet(user1) ;