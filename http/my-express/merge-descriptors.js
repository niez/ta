var hasOwnProperty = Object.prototype.hasOwnProperty
function merge(src, dest, redefine){
  Object.getOwnPropertyNames(src).forEach(function forEachPropertyName(name){
    // 若存在相同property,并且!redefine(不同意redefine),则直接返回
    if(hasOwnProperty.call(dest, name) && !redefine){
      return
    }
    var descriptor = Object.getOwnPropertyDescriptor(src, name);
    Object.defineProperty(dest, name, descriptor);
  })
  return dest
}

module.exports = merge