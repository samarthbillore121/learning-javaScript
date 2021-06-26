const searchedList = function (){
    let value = document.getElementById('search').value;
    if(value.length!==0){
        console.log("hellloooo")
        document.getElementById("addedTask1").textContent = '';
        let serchedArray = search(value);
            displayArray(serchedArray);
    }

    else {
        viewTask();
    }
}
