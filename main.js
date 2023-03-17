function newElement(){ 
    let element = document.createElement("li");
    element.className = "close";
    element.innerHTML = document.getElementById("input1").value + "<button onclick='deleteListItem(event)'>X</button>";
    
    let ul = document.querySelector("ul");
    ul.appendChild(element);
    console.log(ul);
}

function deleteListItem(event){
    console.log('called')
    let parentLiTag = event.target.parentElement;
    let parentUlTag = event.target.parentElement.parentElement;

    parentUlTag.removeChild(parentLiTag);
}
