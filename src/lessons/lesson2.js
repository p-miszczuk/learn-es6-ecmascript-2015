// let keyword
var message = "hi"
var message2 = "hi"
let message3 = "hi"

{
    var message = "bye"
}

function greet() {
    var message2 = "bye"
}

{
    let message3 = "bye"
}

function varTest () {
    var fs = [];

    for (var i=0; i<10; i++) {
        fs.push(function() {
            console.log("vartest: " + i)
        })
    }
    fs.forEach(function(f) {
        f()
    })
}

function letTest () {
    var fs = [];

    for (let i=0; i<10; i++) {
        fs.push(function() {
            console.log("letTest "+i)
        })
    }
    fs.forEach(function(f) {
        f()
    })
}

function varFunc() {
    var previous = 0;
    var current = 1;
    var i;
    var temp;

    for  (i=0; i<10; i+=1) {
        temp = previous;
        previous = current;
        current = temp + current
    }

    console.log("varFunc: " + current + " " + previous)
}

function letFunc() {
    let previous = 0;
    let current = 1;

    for  (let i=0; i<10; i+=1) {
        let temp = previous;
        previous = current;
        current = temp + current
    }

    console.log("letFunc: " + current + " " + previous)
}


export {
    message,
    message2,
    message3,
    varTest,
    letTest,
    varFunc,
    letFunc
}