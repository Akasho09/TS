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
    console.log(a+b)
    return a+b
}
console.log(sum(1,2));


function runafter1s (f1 : Function) {
    setTimeout(f1, 1000);
}

// expects no Arguments and returns void
function runafter2s (f1 : ()=> void) {
    // setTimeout(f1, 2000);
    console.log(f1()) // even though writing void as o/p it still gets number as o/p????
}


runafter1s(()=>{
    console.log("Fn to run")
});

runafter2s(function(): number{
    console.log("Fn to run 2")
    return 5
});




// ????
// function runafter2s(f1: () => never) {
//     setTimeout(f1, 2000); // No need to log f1() since we don’t expect any return
// }

// runafter2s(function() {
//     console.log("Fn to run 2");
//     throw new Error("No return allowed"); // The function must throw an error or never terminate
// });
