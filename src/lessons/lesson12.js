let d = new Promise((resolve, reject) => {
    if (true) {
        resolve("Hello world")
    } else {
        reject("not this time")
    }
})

d.then(data => console.log('success ', data))
d.catch(error => console.error('error ', error))

let d2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve("Hello world")
        } else {
            reject("not this time")
        }
    },2000)
})

d2.then(data => {
    console.log("success2", data)
    return "foo bar" //must be return to next data (in then)
    })
    .then(data => console.log("succes3 ", data))
    .catch(error => console.log('error', error))

let d3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve("Hello world")
        } else {
            reject("not this time")
        }
    },3000)
})

d3.then(data => {
        console.log("success2", data)
        throw new Error('error thrown');
        return "foo bar" //must be return to next data (in then)
    })
    .then(data => console.log("succes3 ", data))
    .catch(error => console.log('error', error))