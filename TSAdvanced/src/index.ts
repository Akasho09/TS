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


interface Person  {
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
