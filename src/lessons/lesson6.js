var color = "red";
var speed = 10;
function go() {
    return 'vroom'
}

var car = {color, speed}
var car2 = {color, speed, go}
var car3 = {
    color, 
    speed, 
    go2() {
        return "vroom"
    }
}
var car4 = {
    color, 
    speed, 
    ['go']: function(){
        return "vroom"
    }
}


export {
    car,
    car2,
    car3,
    car4
}