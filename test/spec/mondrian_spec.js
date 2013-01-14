describe('Mondrian should', function() {

	//Core interface
	it('expose a function', function () {
		expect(Mondrian.init).to.be.a('function');
	});

	it('expose public methods as functions', function () {
	    expect(Mondrian.rgb.init).to.be.a('function');
	    expect(Mondrian.hex.init).to.be.a('function');
	    expect(Mondrian.colorName.init).to.be.a('function');
	    expect(Mondrian.hsl.init).to.be.a('function');
	    expect(Mondrian.transparency).to.be.a('function');
	});

	// Core color methods
	it('return the correct format for the rgb color format', function() {
		expect(Mondrian.init('rgb')).to.contain('rgb(');
		expect(Mondrian.init('rgb').length).to.be.greaterThan(9);
	});

	it('return the correct format for the colorName color format', function() {
		expect(Mondrian.init('colorName')).to.be.a('string');
	});

	it('return the correct format for the hex color format', function() {
		expect(Mondrian.init('hex')).to.contain('#');
		expect(Mondrian.init('hex').length).to.eql(7);
	});

	it('return the correct format for the hsl color format', function() {
		expect(Mondrian.init('hsl')).to.contain('hsl(');
		expect(Mondrian.init('hsl').length).to.be.greaterThan(9);
	});

	// Transparency arguments
	it('return the correct format for the rgb color format with transparency', function() {
		expect(Mondrian.init('rgb', true)).to.contain('rgba(');
		expect(Mondrian.init('rgb', true).length).to.be.greaterThan(10);
	});

	it('return the correct format for the hsl color format with transparency', function() {
		expect(Mondrian.init('hsl', true)).to.contain('hsla(');
		expect(Mondrian.init('hsl', true).length).to.be.greaterThan(10);
	});

	it('have its public transparency method returns the correct value', function() {
		expect(Mondrian.transparency(true)).to.be.a('number');
		expect(Mondrian.transparency(40)).to.eql(40);
	});

	// Naive randomness testing
	it('should not return the same rgb color twice in a row', function() {
		expect(Mondrian.init('rgb')).to.not.contain(Mondrian.init('rgb'));
	});

	it('should not return the same colorName color twice in a row', function() {
		expect(Mondrian.init('colorName')).to.not.contain(Mondrian.init('colorName'));
	});

	it('should not return the same hex color twice in a row', function() {
		expect(Mondrian.init('hex')).to.not.contain(Mondrian.init('hex'));
	});

	it('should not return the same hsl color twice in a row', function() {
		expect(Mondrian.init('hsl')).to.not.contain(Mondrian.init('hsl'));
	});

	it('should not return the same rgba color twice in a row', function() {
		expect(Mondrian.init('rgb', true)).to.not.contain(Mondrian.init('rgb', true));
	});

	it('should not return the same hsla color twice in a row', function() {
		expect(Mondrian.init('hsl', true)).to.not.contain(Mondrian.init('hsl', true));
	});
});