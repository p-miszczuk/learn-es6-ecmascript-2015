console.clear();
console.log("lesson 16")

function myfunc() {
    
    // arguments.forEach(function(v,i,a){
    //     console.log(v)
    // })
    
    console.log(arguments)
    console.log(arguments.length)
}

myfunc(1,2,3)

function Store() {
    let aisle = {
        fruit: [],
        vege: []
    }

    return {
        // Store().add('category', 'item1', 'item2')
        add: function (category) {
            let items = [].splice.call(arguments, 1)
            console.log(items)
            items.forEach(function(value, index, array) {
                aisle[category].push(value)
            })
        },
        aisle: aisle
    }

    // return {
    //     // Store().add('category', 'item1', 'item2')
    //     add: function (category, ...items) {
    //         console.log(items)
    //         items.forEach(function(value, index, array) {
    //             aisle[category].push(value)
    //         })
    //     },
    //     aisle: aisle
    // }
}

let myStore = new Store();

myStore.add('fruit', 'apples', 'oranges')

console.log(myStore.aisle)


console.log("finish lesson 16")