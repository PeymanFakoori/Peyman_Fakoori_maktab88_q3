const input = document.createElement("input")
document.body.appendChild(input)
input.onkeyup = function () {
    if(input.value === "." || input.value === "-"){
        console.log("_");

    }else{
        console.log(input.value);
    }
}
input.onkeydown = function(){
    input.value = ""
}