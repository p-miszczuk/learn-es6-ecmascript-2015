function* greet() {
    console.log(`You called 'next()`)
    yield "hello"
}

let greeter = greet();
console.log(greeter)

let next = greeter.next();
console.log(next)

let done = greeter.next();
console.log(done)

function* greet2() {
    console.log('Generators are lazy')
    yield "How";
    console.log("I'm not called until the second next")
    yield "are"
    console.log("call me before you?")
    yield "you?"
    console.log("Called when done")
}

let greeter2 = greet2();
console.log(greeter2.next().value)
console.log(greeter2.next().value)
console.log(greeter2.next().value)
console.log(greeter2.next().value)

// for (let word of greeter2) {
//     console.log(word)
// }

function* greet3( ) {
    let friendly = yield "How";
    friendly = yield friendly + "are";
    yield friendly + "you"
}

let greeter3 = greet3();
console.log(greeter3.next().value)
console.log(greeter3.next(" the hack ").value)
console.log(greeter3.next(" silly ol'").value)

