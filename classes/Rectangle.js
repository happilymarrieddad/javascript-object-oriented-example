"use strict";
class Rectangle extends require('./Shapes') {

	constructor(name,width,height) {
		if (!name || name == '') throw new Error('A circle must have a name.');
		if (!width || width == '') throw new Error('A circle must have a width.');
		if (!height || height == '') throw new Error('A circle must have a height.');

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