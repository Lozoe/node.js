var globalVariable = "This is a global variable";

function gobalFunction() {
    var localVariable = "This is a local variable";
    console.log(globalVariable);
    console.log(localVariable);
    globalVariable = "This is a change variable";
    console.log(globalVariable);
    function localFunction() {
        var innerLocalVariable = "This is a inner local variable";
        console.log("visit global/local/innerlocal variable");
        console.log(globalVariable);
        console.log(localVariable);
        console.log(innerLocalVariable);
    }
    localFunction();
    gobalFunction();
}

gobalFunction();