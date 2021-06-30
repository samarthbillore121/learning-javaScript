const searchedList = function (){

    let value = document.getElementById('search').value;

    if(typeof(value)==="string") value = value.toLocaleLowerCase();

    if(value.length!==0){
        document.getElementById("addedTask1").textContent = '';
        let serchedArray = search(value);
            displayArray(serchedArray);
    }

    else {
        viewTask();
    }
}
