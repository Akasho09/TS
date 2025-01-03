"use strict";
;
function sumOfAges(user1, user2) {
    return user1.age + user2.age;
}
let ageSum = sumOfAges({ name: "akash", age: 20 }, { name: "malik", age: 30 });
console.log(ageSum);
