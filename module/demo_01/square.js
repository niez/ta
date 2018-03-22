exports.square = class Square {
	constructor(width){
		this.width = width;
	}

	area(){
		return this.width ** 2;
	}
};
console.log(exports);