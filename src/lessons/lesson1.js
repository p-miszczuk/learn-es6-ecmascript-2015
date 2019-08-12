const createGreating = function(message, name) {
    return message + name
}

const arrowGreating = (message, name) => {
    return message + name
}

const arrowGreating2 = (message, name) => message + name

const arrowGreating3 = message => "hello" + message

let squared = x => x * x;

const deliverBoy = {
    name: 'John',
    handleMessage: function (message, handler) {
        handler(message)
    },
    receive: function () {
        this.handleMessage("Hello ", message => console.log(message + this.name))
    }
}

export {
    squared,
    arrowGreating3,
    arrowGreating2,
    arrowGreating,
    createGreating,
    deliverBoy
};