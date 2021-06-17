
function viewTask(){
        
        if (initialInput.length){
            
                viewedTask = [...initialInput];
                savedInput = [...savedInput, ...viewedTask];
                initialInput.splice(0,initialInput.length);
        
            viewedTask.map((addedtask)=>{
           
                // creating a div
                let taskElement = document.createElement("div");
                let editElement = document.createElement("i")

                // setting attributes
                taskElement.setAttribute("class","desc");
                taskElement.setAttribute("draggable","true");
                editElement.setAttribute("class", "fa fa-edit");

                editElement.onclick = function (event) {
                    editTask(taskElement);
                 }

                // adding the edit element
                taskElement.appendChild(editElement);


                // setting text (adding task text)          
                let taskNamee = document.createTextNode(` ${addedtask.taskName}`);          
                taskElement.appendChild(taskNamee);            
                
                let parentDiv = document.getElementById("addedTask1");
                parentDiv.appendChild(taskElement);            
            
            })
        }
        return ;
}
