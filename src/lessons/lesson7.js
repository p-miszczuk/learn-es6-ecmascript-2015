const data = [1,2,3]

let firstArr = [1,2,3]
let secondArr = [4,5,6]

firstArr.push(secondArr)

let firstArr2 = [1,2,3];
firstArr2.push(...secondArr)

const add = (a,b,c) => a+b+c 

export {
    data,
    firstArr,
    firstArr2,
    add
}