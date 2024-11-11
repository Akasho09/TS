type eltype = (string | number)[]  ;

function firstel (arr : any) {
    return arr[0]
}

const value = firstel([1 , "ahmad" , 1 ]);

// TS couldnt predict the type of op 
// ie the aready existing properties of numbers and strings 
// cant be implemented on types (number | string )

// console.log(value.toUpperCase());
console.log("value".toUpperCase());

// T is type parameter 

function identity <T>(i : T[]) {
    return i[0]
    }
    
    const n1 = identity<string>(["akash", "ahmad" ])
    const n2 = identity(["akash", "ahmad" , 1 ])
    const aadhar = identity<number> ([1,2,3]);
    n1.toUpperCase();
    // n2.toUpperCase() ;
    console.log(n1 , aadhar) 