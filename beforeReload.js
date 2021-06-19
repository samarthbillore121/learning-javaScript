
window.addEventListener("beforeunload", function(event) { 
    this.sessionStorage.setItem("store",JSON.stringify(savedInput));
});


