
let x : number = 1 ;
// x="akash";
console.log(x)

// let x : string = '1' ;
// x="akash";
// console.log(x)

function f1 ( firstname : string ) : void {
console.log("Hello" ,firstname) ;
console.log("Hello " + firstname) ;
}

f1("akash");


// type interference =ts automatically predicted return type
function sum (a : number , b : number ) : number {
    return a+b
}

console.log(sum(1,2));