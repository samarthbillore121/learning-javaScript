let dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {
    dragged = event.target;
}, true);

document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, true);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "Task") {
  //  event.target.style.background = "";
    let label = document.getElementById("label");
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
    event.target.removeChild(label);
    
    let index = TaskIndex(dragged);
    
    if(index!==-1){
    currentTaskArray.push(savedInput[index]);
    savedInput.splice(index,1);
    }
    
    //viewedTask.splice(dragged.childNodes[0].data-1,1);
  }
  else if (event.target.className == "Delete"){
    let index = TaskIndex(dragged);
    if(index===-1) currentTaskArray.splice(index,1);
    else savedInput.splice(index,1);
    dragged.parentNode.removeChild(dragged);
  }
}, true);