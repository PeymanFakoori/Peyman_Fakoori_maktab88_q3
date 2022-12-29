const div = document.createElement("div")
document.body.appendChild(div)
div.style.backgroundColor = "white"
const change = div.style.width = "50%"
div.style.border = "1px solid black"

const div2 = document.createElement("div")
div.appendChild(div2)
div2.style.width = "10%"
div2.style.height = "35px"
div2.style.backgroundColor = "#4CAF50"
div2.style.textAlign = "center"
div2.style.lineHeight = "32px"
div2.style.color = "black"


const button = document.createElement("button")
const btnTxt = document.createTextNode("Add 10 %")
button.setAttribute("type","button")
button.appendChild(btnTxt)
document.body.appendChild(button)

button.onclick = function(){
    div2.style.width = "+20%"
    }
