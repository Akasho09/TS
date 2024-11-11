
let arr : number[] = [1,2,3,4,5];

function filterarray (arr : number[]) : number[] {

    return (arr.filter((a)=>a%2==0));

}

console.log(filterarray(arr));

type keypressed  = "up" | "down" | "left" | "right"
enum keypressed2  {
    up = 1,
    down ,
    left ,
    right 
}
function fnOnKeyPress (k : keypressed2) {

    console.log("Things to ececute on " + k + " key pressed ")
}

fnOnKeyPress(keypressed2.up);
fnOnKeyPress(keypressed2.down)

console.log(keypressed2.down)