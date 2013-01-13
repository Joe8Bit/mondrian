describe('Mondrian should', function() {

	// Core color methods
	it('return the correct format for the rgb color format', function() {
		expect(Mondrian.init('rgb')).to.contain('rgb(');
	});

	it('return the correct format for the colorName color format', function() {
		expect(Mondrian.init('colorName')).to.be.a('string');
	});

	it('return the correct format for the hex color format', function() {
		expect(Mondrian.init('hex')).to.contain('#');
	});

	it('return the correct format for the hsl color format', function() {
		expect(Mondrian.init('hsl')).to.contain('hsl(');
	});

	// Transparency arguments
	it('return the correct format for the rgb color format with transparency', function() {
		expect(Mondrian.init('rgb', true)).to.contain('rgba(');
	});

	it('return the correct format for the hsl color format with transparency', function() {
		expect(Mondrian.init('hsl', true)).to.contain('hsla(');
	});

	it('have its public transparency method returns the correct value', function() {
		expect(Mondrian.transparency(true)).to.be.a('number');
		expect(Mondrian.transparency(40)).to.eql(40);
	});
});