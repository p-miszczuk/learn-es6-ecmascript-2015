console.clear();
console.log("lesson 15")
function ajax ({
    type = "get",
    url = requiredParameter("url"),
    data = {},
    success = () => {},
    error = () => {},
    isAsync = true} = {}){
        console.log(JSON.stringify({type, url, data, success, error, isAsync}, null, 2))
}

function requiredParameter(name) {
    throw new Error (`Missing parameter "${name}"`)
}

try {
    ajax({
        url: "https:my.api.io",
        success: () => {}
    })
}
catch(err) {

}

console.log("finish lesson 15")