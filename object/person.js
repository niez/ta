function Person(){

}

Person.prototype.name = "Alex";
Person.prototype.canTalk = true;

Person.prototype.greet = function () {
    if (this.canTalk) {
        console.log(`I am ${this.name}`)
    }
};

var someone = new Person();
someone.name = 'Nick';
// someone.greet();
// console.log(someone.hasOwnProperty('name'));

var somebody = Object.create(someone, {somebody: {configurable: true, enumerable: true, writable: true, value: somebody}})
module.exports = someone.greet;
// console.log(somebody)
console.log(module)
// console.log(global.process.versions)


var iamObject = {}
var iamFunction = function(){
    console.log('i am function')
}

console.log(iamObject)
// iamObject()
iamObject = iamFunction
console.log(iamObject)
iamObject()