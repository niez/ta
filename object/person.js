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
someone.greet();
console.log(someone.hasOwnProperty('name'));

var somebody = Object.create(someone, {somebody: {configurable: true, enumerable: true, writable: true, value: somebody}})

console.log(somebody)