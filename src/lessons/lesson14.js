let map = new Map();

//API
// set(), get(), size, clear(), has()

map.set('foo', 'bar');
map.set('hello', 'world')
console.log('lesson 14')
console.log(map.get('foo'))
console.log(map.get('hello'))
// map.clear()
console.log("map size " + map.size)
console.log("map has " + map.has('foo')) //true/false

//Iterators 
//keys()
//entries()
//values()

for (let key of map.keys()) {
    console.log(key)
}

for (let value of map.values()) {
    console.log(value)
}

for (let [key, value] of map.entries()) {
    console.log(key + " " + value)
}

// let map2 = new WeakMap();
// let obj = {}
// let func = function() {}
// // map2.set(obj, 'bar');
// // map2.set(func, 'world')
// // map2.set('string', 2)

// for (let [key, value] of map2.entries()) {
//     console.log(key + " " + value)
// }


console.error("finish lesson 14")