import { number } from "zod";

type Car = {
title : string ,
price : number 
}

// Print id of a user which can be number or string 

// union of types 
type direction = "east" | "west" | "north" | "south"
type idtype = number | string;

function greeet (id : (number | string ) ) {
console.log(id)
}

function greeet2 (id : idtype ) {
    console.log(id)
    }

greeet(1)
greeet("2")
greeet2(1)
greeet2("2")


// intersection of types

interface Employ {
    name : string ,
    salary : number
}

interface Manager {
    department : string
}

type Techlead = Employ & Manager ;

const t1 : Techlead = {
    name : "akash" ,
    salary : 1000,
    department : "CSE"
}

console.log(t1)

// arrays 
type numarray = number[] ;
type stringarray = string[] ;

function sumofarray(nums : numarray) {
    let ans =0;
for (let i=0;i<nums.length;i++) {
ans+=nums[i];
}
return ans ;
}

console.log("sum of array : " , sumofarray([1,2,3,4,5]))

