
let initialInput = [];;
let savedInput = [];
let displayedArray = [];
let currentTaskArray = [];
let completedTaskArray = [];


function Save(){

   if(document.getElementById("input").value!==""){

     
        //adding input to array
        let newTaskName = document.getElementById("input").value ;
        initialInput.push(new task(newTaskName));

        //setting it to null
        document.getElementById("input").value = null;

        // saving it to another array
        savedInput = [...savedInput, ...initialInput];
       
        // addding element
        initialInput.map(addedtask =>{
            elementMaker(addedtask);
        })

        initialInput.splice(0,1);
  }

    else alert("Enter something")

}

class task{
    constructor(taskName){        
        this.taskName = taskName;
    }
}
