"use strict";
class Shapes {

	constructor(name) {
		if (!name || name == '') throw new Error('A shape must have a name.');

		this._name = name;

	}

	getName() {
		return this._name;
	}
}

module.exports = Shapes;