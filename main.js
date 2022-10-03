let item = document.querySelector(".item");
let placeholders = document.querySelectorAll(".placeholder");


for(let placeholder of placeholders){
    placeholder.addEventListener("dragover",dragover);
    placeholder.addEventListener("dragenter",dragenter);
    placeholder.addEventListener("dragleave", dragleave);
    placeholder.addEventListener("drop",dragdrop);
}
function dragover (e) {
    e.preventDefault();
    
    
   
}
function dragenter (e) {
    e.target.classList.add("hovers");
}
function dragleave (e) {
    e.target.classList.remove("hovers");
}
function dragdrop (e) {
    e.target.append(item);
    e.target.classList.remove("hovers");
    let coordinates = item.getBoundingClientRect();
    if(coordinates.x === 383){
        item.classList.add("start");
    }else{
        item.classList.remove("start");
    }
    if(coordinates.x === 608){
        item.classList.add("progress");
        e.target.append(item);
    }else{
        item.classList.remove("progress");
    }
    if(coordinates.x === 833){
        item.classList.add("done");
        e.target.append(item);
    }else{
        item.classList.remove("done");
    } 
}

function dragstart(e) {
    e.target.className ="item";
    e.target.classList.add("hold");
    setTimeout(() => {
       e.target.classList.add("hide"); 
    },0);  
}

function dragsend(e) {
    e.target.classList.remove("hold","hide");
}
item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragsend);