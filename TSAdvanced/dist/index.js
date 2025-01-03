"use strict";
// interface User {
//     name : string,
//     age : number 
// };
;
function updateUser(newDetails) {
    // db call
}
const p1 = {
    fName: "akash",
    lName: "mlaik"
};
const p2 = {
    fName: "akash",
    lName: "mlaik"
};
const emps = {
    1: {
        fName: "AKASH",
        lName: "Malik",
        age: 12
    },
    2: {
        fName: "Shahid",
        lName: "Ahmad",
        age: 21
    }
};
console.log(emps["1"]);
console.log(emps[1]);
const emps2 = {
    2: {
        fName: "AKASH",
        lName: "Malik",
        age: 12
    },
    1: {
        fName: "Shahid",
        lName: "Ahmad",
        age: 21
    }
};
console.log(emps2["1"]);
console.log(emps2[1]);
// MAP
const users = new Map();
users.set(1, { fname: "akash", lname: "malik", age: 21 });
users.set(2, { fname: "shahid", lname: "malik", age: 22 });
function eventfn(s) { }
eventfn("scroll");
// eventfn("drag")
