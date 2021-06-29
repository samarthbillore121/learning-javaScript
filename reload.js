
window.addEventListener("beforeunload", function(event) { 
    sessionStorage.setItem("storeTask",JSON.stringify(savedInput));
    sessionStorage.setItem("storecurrentTask",JSON.stringify(currentTaskArray));
});

