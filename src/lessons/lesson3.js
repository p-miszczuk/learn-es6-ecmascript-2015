function greet(greeting, name) {
    console.log("lesson3 greet func: " + greeting + " " + name)
}

function greet2(greeting, name = "John") {
    console.log("lesson3 greet2 func: " + greeting + " " + name)
}

function greet3(greeting, name = "John") {
    console.log("lesson3 greet3 func: " + greeting + " " + name)
}

let receive = (complete = () => console.log("lesson3 receive func complete")) => complete()

export {
    greet,
    greet2,
    greet3,
    receive
}