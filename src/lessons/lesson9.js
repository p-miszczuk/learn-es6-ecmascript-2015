const generateObj = () => {
    return {
        color: "blue",
        name: "john",
        state: "NY",
        position: "Forward"
    }
}

let [first,,,,fifth] = ['red', 'yellow', 'green', 'blue', 'orange']
const firstColor = first;
const fifthColor = fifth;

const people = [
    {
        "firstName": "Adam",
        "secondName": "Cena",
        "phone": "1-403-251"
    },
    {
        "firstName": "John",
        "secondName": "Dudkowski",
        "phone": "1-403-251"
    },
    {
        "firstName": "Ilia",
        "secondName": "Root",
        "phone": "1-403-251-678"
    },
]

export {
    generateObj,
    firstColor,
    fifthColor,
    people
}