
let savedInput = [];
let viewedTask = [];
let editedTask = [];
let completedTask = [];

function Save(){

   if(document.getElementById("input").value!==""){

        let newTaskName = document.getElementById("input").value ;
        savedInput.push(new task(newTaskName));
        document.getElementById("input").value = null;
        alert("Saved");

  }

    else alert("Enter something")

}

class task{
    constructor(taskName){        
        this.taskName = taskName;
    }
}
