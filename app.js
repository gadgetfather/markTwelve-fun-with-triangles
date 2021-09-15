const inputs = document.querySelectorAll(".angle-input")
const isTriangleBtn = document.querySelector("#is-triangle")
const outputEl = document.querySelector("#output")

isTriangleBtn.addEventListener('click',isTriangle)

function sumOfAngle(angle1,angle2,angle3){
    const sum = angle1 + angle2 + angle3;
   return sum;
}

function isTriangle(){
    sumOfAngle(45,45,45)
    

}