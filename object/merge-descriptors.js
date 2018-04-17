/**
 * 
 */

var object = {}

object.init = function(){
  
}


Object.defineProperty(object, 'key_1', {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 'value_1'
})
console.log(object);