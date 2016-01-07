"use strict";
class Rectangle extends require('./Shapes') {

	constructor(name,width,height) {
		super(name);
		this._width = width;
		this._height = height;
	}

	getHeight() {
		return this._height;
	}

	getWidth() {
		return this._width;
	}

}

module.exports = Rectangle;