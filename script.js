let addBtn = document.getElementById("addBtn");
let content = document.getElementsByClassName('ul');
  
 addBtn.addEventListener('click', newitem);
function newitem(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("addTxt").value;
  var txtNode = document.createTextNode(inputValue);
  li.appendChild(txtNode);
  li.setAttribute("class", "checked");
  if(inputValue===""){
    alert("You must write something!");
  }else{
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("addTxt").value = "";
}

var list = document.getElementById("ul");
list.addEventListener("click", function(ev){
    if(ev.target.tagName ==='li'){
        ev.target.classList.toggle('checked');
    }
}, false);
