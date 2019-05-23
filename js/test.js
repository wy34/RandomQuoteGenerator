function print() {
    let message = ""
    message += "Hello";
    return message
}

let arr = []
arr.push(print())

console.log(arr)