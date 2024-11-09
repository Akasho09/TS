// implementing interfaces 
interface person {
    name : string ;
    age : number ;
    greet ( phrase : string ) : void;
    eyes : 2
}

class Employee implements person {
    name : string ;
    age : number ;
    eyes : 2
constructor (n: string , a: number ) {
this.name = n ;
this.age = a;
this.eyes = 2
    }
    greet(phrase: string): void {
         console.log(phrase + this.name)
    }
}

class Workers {
    name : string ;
    age : number ;
    eyes : 2
constructor (n: string , a: number ) {
this.name = n ;
this.age = a;
this.eyes = 2
    }
    greet(phrase: string): void {
         console.log(phrase + this.name)
    }
}

const e1 = new Employee ("akash" , 19) ;
e1.greet("Good Morning ");
console.log(e1.eyes) 

const w1 = new Workers ("ahmad" , 20) ;
w1.greet("Good Morning ");
console.log(w1.eyes)

