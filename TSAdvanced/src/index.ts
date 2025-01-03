// interface User {
//     name : string,
//     age : number 
// };

// function sumOfAges (user1 : User  , user2 : User){
//     return user1.age + user2.age
// }


// let ageSum =  sumOfAges ({name : "akash", age: 20} , {name : "malik" , age : 30});
// console.log(ageSum)

//pick

interface User {
    name : string,
    age : number,
    password : string
};

type updateUserProps = Pick<User, 'name' | 'age'>;
type updateUserPropsOptional = Partial<updateUserProps>

function updateUser(newDetails : updateUserPropsOptional){
    // db call
}


interface Person {
    readonly fName  :  string
    readonly lName : string
}
interface Person2  {
     fName  :  string
     lName : string
}
const p1 : Readonly<Person2> = {
    fName : "akash" ,
    lName : "mlaik"
}
const p2 : Person = {
    fName : "akash" ,
    lName : "mlaik"
}

// p1.fName= "ahmad"
// p2.lName="malik2"


// RECORD

interface empDetails {
    [SNo:number] : {
        fName : string,
        lName : string,
        age : number
    }
}

const emps:empDetails = {
     1 :{
        fName : "AKASH",
        lName : "Malik",
        age : 12
     },
     2 : {
        fName : "Shahid",
        lName : "Ahmad",
        age : 21
     }
}

console.log(emps["1"])
console.log(emps[1])

type empDetails2 = Record < number , {fName : string , lName: string ,age: number}>

const emps2 : empDetails2 = {
    2 :{
       fName : "AKASH",
       lName : "Malik",
       age : 12
    },
    1 : {
       fName : "Shahid",
       lName : "Ahmad",
       age : 21
    }
}

console.log(emps2["1"])
console.log(emps2[1])


// MAP

const users = new Map<number, {fname:string,lname:string, age: number}>()

users.set(1 , {fname:"akash" , lname : "malik" , age : 21})
users.set(2, { fname:"shahid" , lname:"malik" , age:22})


// exclude --opp to pick

type event = "click" | "scroll" | "drag"
type asalEvent = Exclude <event,"drag">

function eventfn(s:asalEvent){}

eventfn("scroll")
// eventfn("drag")

