const div = document.createElement("div");
document.body.appendChild(div)
div.style.backgroundColor = "gray"
div.style.border = "2px solid gray"
div.style.width = "500px"
div.style.height = "400px"
div.style.borderRadius = "10px"

const h1 = document.createElement("h1")
const h1TextNode = document.createTextNode("LIGHT MODE")
div.appendChild(h1)
h1.appendChild(h1TextNode)
h1.style.textAlign = "center"

const p = document.createElement("P")
const pText = document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, veniam eum. Blanditiis iusto quasi nesciunt deleniti iure culpa aperiam voluptas placeat, reiciendis debitis ullam autem eveniet natus ex dolorem facere quis accusamus doloremque laborum. Possimus unde doloremque quis eligendi veritatis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, veniam eum. Blanditiis iusto quasi nesciunt deleniti iure culpa aperiam voluptas placeat, reiciendis debitis ullam autem eveniet natus ex dolorem facere quis accusamus doloremque laborum. Possimus unde doloremque quis eligendi veritatis?")
div.appendChild(p)
p.appendChild(pText)
p.style.textAlign = "center"

const button = document.createElement("button")
button.setAttribute("type","button")
const buttontext = document.createTextNode("Light Mode")
document.body.appendChild(button)
button.appendChild(buttontext)


const button1 = document.createElement("button")
button.setAttribute("type","button")
const buttontext1 = document.createTextNode("Dark Mode")
document.body.appendChild(button1)
button1.appendChild(buttontext1)

button1.onclick = function(){
div.style.backgroundColor = "black"
div.style.color = "white"
}
button.onclick = function(){
    div.style.backgroundColor = "gray"
    div.style.color = "black"
    }