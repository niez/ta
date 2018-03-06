// create new object

var obj_1 = {
	a: '1',
	b: '2',
	c: [1,2,3],
	d: {
		d_1: 'd1',
		d_2: 'd2',
		d_3: {},
		d_4: ['a','b','c'],
		d_5: (a)=>{a * 2},
	}
};

// console.log(Object.getOwnPropertyNames(obj_1));
// console.log(Object.keys(obj_1));

// Object.entries: returns an Array of a given object's own Enumerable property[key, value] pairs.
console.log(Object.entries(obj_1));
Object.defineProperty(obj_1, 'a', {
	enumerable: false
});
console.log(Object.entries(obj_1)); 					// property 'a' is not printed
console.log(Object.getOwnPropertyDescriptors(obj_1)); 	// return all property descriptors
// console.log(Object.values(obj_1));


// Object.defineProperties(obj_1, {
// 	property1: {
// 		value: 42,
// 		writable: true,
// 		enumerable: false,
// 		configurable: false
// 	},
// 	property2: {

// 	}
// });
// console.log(Object.values(obj_1));

// see 