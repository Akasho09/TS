# enum 
is a special "class" that represents a group of constants (unchangeable variables).

Enums come in two flavors string and numeric. 

eg 
- type keypressed  = "up" | "down" | "left" | "right"
equivalentt enum is 
enum keypressed2  {
    up = 90,
    down = 180,
    left = 270,
    right = 360
}
-  keypressed2.up = 1

JS Code 
var keypressed2;
(function (keypressed2) {
    keypressed2[keypressed2["up"] = 0] = "up";
    keypressed2[keypressed2["down"] = 1] = "down";
    keypressed2[keypressed2["left"] = 2] = "left";
    keypressed2[keypressed2["right"] = 3] = "right";
})(keypressed2 || (keypressed2 = {}));
function fnOnKeyPress(k) {
    console.log("Things to ececute on " + k + " key pressed ");
}
fnOnKeyPres



