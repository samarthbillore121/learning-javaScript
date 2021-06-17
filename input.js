
let initialInput = [];
let viewedTask = [];
let savedInput = [];
let completedTask = [];

function Save(){

   if(document.getElementById("input").value!==""){

        let newTaskName = document.getElementById("input").value ;
        initialInput.push(new task(newTaskName));
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
