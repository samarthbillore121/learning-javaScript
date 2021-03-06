function elementMaker(addedtask){
      // creating a div
    if(addedtask.length!== 0)
    {
        
        let taskElement = document.createElement("div");
        let editElement = document.createElement("i")

        // setting attributes
        taskElement.setAttribute("class","desc");
        taskElement.setAttribute("draggable","true");
        editElement.setAttribute("class", "fa fa-edit");

        editElement.onclick = function (event) {
            editingElementMaker(taskElement);
        }

        // adding the edit element
        taskElement.appendChild(editElement);


        // setting text (adding task text)          
        let taskNamee = document.createTextNode(`${addedtask.taskName}`);          
        taskElement.appendChild(taskNamee);

        // let br = document.createElement("br");
        // taskElement.appendChild(br);
        
        // let dateTime = document.createTextNode(`${addedtask.dateTime}`);          
        // taskElement.appendChild(dateTime);
        
        let parentDiv = document.getElementById("addedTask1");
        parentDiv.appendChild(taskElement);
    } 
      
}

function editingElementMaker(taskElement){

    let editingBackDropDiv = document.createElement("div");
    let editingInputDiv = document.createElement("div");
    let editingInputElem = document.createElement("textarea");
    let buttonInput = document.createElement("button");
    let cancelButton = document.createElement("button")

    // setting attributes
    editingBackDropDiv.setAttribute("class","backdrop");
    editingInputDiv.setAttribute("class","inputbox");
    editingInputElem.setAttribute("class","inputField");
    editingInputElem.setAttribute("placeholder","Enter your edited task");
    buttonInput.setAttribute("class","buttonInput");
    cancelButton.setAttribute("class","cancelButton");

    // adding the previous value to the inputElement    
    editingInputElem.value = taskElement.childNodes[1].data;

    //setting child div
    let outerMostDiv = document.getElementById("outerdiv");
    outerMostDiv.appendChild(editingBackDropDiv);
    outerMostDiv.appendChild(editingInputDiv);
    editingInputDiv.appendChild(editingInputElem);
    editingInputDiv.appendChild(buttonInput);
    editingInputDiv.appendChild(cancelButton);
    buttonInput.innerHTML = "Save";
    cancelButton.innerHTML = "Cancel";

    let index = TaskIndex(taskElement);
    

        // giving task to the editedTask
        buttonInput.onclick = function(){
            
            
            let newObj = new task(editingInputElem.value);
            if(index===-1) currentTaskArray.splice(index,1,newObj)
            else savedInput.splice(index,1,newObj);

            taskElement.childNodes[1].data= `${editingInputElem.value}` ;
            outerMostDiv.removeChild(editingBackDropDiv);
            outerMostDiv.removeChild(editingInputDiv);

        }

        cancelButton.onclick = function(){

            outerMostDiv.removeChild(editingBackDropDiv);
            outerMostDiv.removeChild(editingInputDiv);
        
        }
}


function afterReload(savedInputt){

    if (savedInputt.length===0){
       
        //storing it again
        savedInputt = JSON.parse(sessionStorage.getItem("storeTask"));
        
       if(currentTaskArray.length===0 && JSON.parse(sessionStorage.getItem("storecurrentTask")) )
       {

       currentTaskArray = JSON.parse(sessionStorage.getItem("storecurrentTask"));
       savedInputt = [...savedInputt, ...currentTaskArray];

       currentTaskArray = [];
       sessionStorage.setItem("storecurrentTask",JSON.stringify(currentTaskArray));

       }
        

        //mapping it again
        displayArray(savedInputt);
        return savedInputt;

    }

    else {
        document.getElementById("addedTask1").textContent = '';
        displayArray(savedInputt);
        return savedInputt;
    }
}


function TaskIndex(taskElement){
    let obj = savedInput.filter(obj=>{
        return obj.taskName===taskElement.childNodes[1].data;
    });
    
       let index = savedInput.indexOf(obj[0]);
        return (index);
}

function search(searchValue){
        let searchedValueObjs =  savedInput.filter(addedtask =>{
            let lowerCaseTask;
            if(typeof(addedtask.taskName)==="string") lowerCaseTask  = addedtask.taskName.toLowerCase()
            return lowerCaseTask.startsWith(searchValue);          
            })


        return searchedValueObjs;
    
}

function displayArray(arr){
    arr.map(element=>{
        elementMaker(element);
    })
}

const btrfn = debounce(searchedList, 500);

function debounce(fn, d){
    let timer;
    return ()=>{
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context,args);
        }, d)
    }
}