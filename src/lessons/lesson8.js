const salut = "Hello";
let greeting = `${salut}, World`

const x = 1;
const y = 2;

const addition = `${x} + ${y} = ${x + y}`

const tag = (strings, ...values) => {
    values[0] < 20 ? values[1] = "awake" : values[1] = "sleepy"

    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}

let message8 = tag`It's ${new Date().getHours()} I'm ${""}`

export {
    greeting,
    addition,
    message8
}