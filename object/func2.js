function f (a, b) {
    console.log(Object.getOwnPropertyDescriptors(f))
    return a + b
}
var obj = {
    'sum': f
}

console.log(f(1,2))
console.log(obj.sum(2,2))
