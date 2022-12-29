const input = document.getElementById("myInput")
const  ul = document.getElementById("myUL");
const li = ul.getElementsByTagName('li');

input.onkeyup = function(){
const filter = input.value.toUpperCase()
for(let i = 0; i < li.length; i++){
    let a = li[i].getElementsByTagName("a")[0];
    let txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
}
}

