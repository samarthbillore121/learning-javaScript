function editTask(taskElement){

    let editingBackDropDiv = document.createElement("div");
    let editingInputDiv = document.createElement("div");
    let editingInputElem = document.createElement("input");
    let buttonInput = document.createElement("button");
    let cancelButton = document.createElement("button")

    // setting attributes
    editingBackDropDiv.setAttribute("class","backdrop");
    editingInputDiv.setAttribute("class","inputbox");
    editingInputElem.setAttribute("class","inputField");
    editingInputElem.setAttribute("placeholder","Enter your edited task")
    buttonInput.setAttribute("class","buttonInput");
    cancelButton.setAttribute("class","cancelButton");


    //setting child div
    let outerMostDiv = document.getElementById("outerdiv");
    outerMostDiv.appendChild(editingBackDropDiv);
    outerMostDiv.appendChild(editingInputDiv);
    editingInputDiv.appendChild(editingInputElem);
    editingInputDiv.appendChild(buttonInput);
    editingInputDiv.appendChild(cancelButton);
    buttonInput.innerHTML = "Save";
    cancelButton.innerHTML = "Cancel";

    // giving task to the editedTask
    buttonInput.onclick = function(){

        taskElement.childNodes[1].data= ` ${editingInputElem.value}` ;
        outerMostDiv.removeChild(editingBackDropDiv);
        outerMostDiv.removeChild(editingInputDiv);
      
    }

    cancelButton.onclick = function(){

        outerMostDiv.removeChild(editingBackDropDiv);
        outerMostDiv.removeChild(editingInputDiv);
      
    }
    
 
}