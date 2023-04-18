function varExample() {
    var x = 10;
    if (true) {
        var x = 20; // This reassigns the value of x in the outer scope
    }
    console.log(x); // Output: 20
}

varExample();

function letExample() {
    let y = 10;
    if (true) {
        let y = 20; // This declares a new variable y with block-level scope
        console.log(y); // Output: 20
    }
    console.log(y); // Output: 10
}

letExample();


function exampleConst() {
    const x = 10;
    //  x = 20; // This is not allowed because this variable is constant that not reassigned.
    console.log(x);
}


exampleConst()