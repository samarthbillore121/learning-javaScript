
window.addEventListener("beforeunload", function(event) { 
    this.sessionStorage.setItem("storeTask",JSON.stringify(savedInput));
    this.sessionStorage.setItem("storecurrentTask",JSON.stringify(currentTaskArray));
});

