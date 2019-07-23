var sum = new Function('a','b','return a + b');
var sum0 = new Function('return a + b');
var sum1 = new Function('return this.a + this.b');
var a = 5, b = 4;
var obj = {}
Object.defineProperties(obj, {
    'sum':{
        writeable: true,
        enumerable: true,
        configurable: true,
        value: sum
    },
    'sum1':{
        writeable: true,
        enumerable: true,
        configurable: true,
        value: sum1
    }
})
Object.defineProperties(obj,{
    'a':{
        writeable: true,
        enumerable: true,
        configurable: true,
        value: 1
    },
    'b':{
        writeable: true,
        enumerable: true,
        configurable: true,
        value: 3
    }
})
var obj1 = {
    'a': 4,
    'b': 5
}

console.log(sum1.call(obj))
console.log(sum1.call(obj1))
console.log(obj.sum1())
console.log(sum0.call())

// Object.bind(obj1, t)
// console.log(t())
// console.log(Object.getOwnPropertyDescriptors(sum0))
// console.log(sum0())
// console.log(obj.sum(1,2))
// console.log(obj.sum.apply(null,[2,3]))

// console.log(Object.getOwnPropertyDescriptors(obj))
