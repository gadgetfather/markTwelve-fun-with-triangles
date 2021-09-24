const inputs = document.querySelectorAll(".angle-input")
const isTriangleBtn = document.querySelector("#is-triangle")
const outputEl = document.querySelector("#output")

isTriangleBtn.addEventListener('click',isTriangle)



function sumOfAngle(angle1,angle2,angle3){
    const sum = angle1 + angle2 + angle3;
   return sum;
}
function outputMessage(message){
    outputEl.textContent= message
}

function isTriangle(){
    let a1 = Number(inputs[0].value)
    let a2 = Number(inputs[1].value)
    let a3 = Number(inputs[2].value)
    const sumOfAngles = sumOfAngle(a1,a2,a3)
    console.log(sumOfAngles)
    if(sumOfAngles===180){
        outputMessage("It is a triangle")
    }
    else{
        outputMessage("it is not triangle")
    }
    

}