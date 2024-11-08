## TS
TypeScript is a statically typed, free, and open-source programming language developed by Microsoft. It is a superset of JavaScript, meaning that any valid JavaScript code is also valid TypeScript code. TypeScript adds optional static typing and other features to improve the development experience, making it a popular choice for large-scale JavaScript applications.

# Loosely typed lang : e.g Python , JS , php
# Srtrongly typed lang : eg Java , c++ , Rust , TS

![alt text](<Screenshot 2024-11-07 at 6.18.07 PM.png>)

# set up
- npm install -g typescript 
- mkdir node-app
- cd node-app
- npm init -y 
- tsc --init 

- tsc -b : to comiple tsc to js 


# type interference in ts 
type inference is a feature that automatically deduces or "infers" the types of variables, function return values, and expressions based on the values they are assigned, so you don’t have to explicitly declare the type. 
eg :
function sum (a : number , b : number ) : `number` {
    return a+b
}
- no need to write : number  