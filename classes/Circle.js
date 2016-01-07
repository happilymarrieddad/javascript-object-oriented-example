"use strict";
class Circle extends require('./Shapes') {

	constructor(name,radius) {
		super(name);
		this._radius = radius;
	}

	getRadius() {
		return this._radius;
	}

	getCircumference() {
		return (this._radius * 2 * Math.PI);
	}

	getCircumferenceWithLimit(limit) {
		return (parseFloat(this._radius * 2 * Math.PI).toFixed(limit));
	}

}

module.exports = Circle;