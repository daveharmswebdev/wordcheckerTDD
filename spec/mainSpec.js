describe("main spec", function() {

	it('there should be a checkWordCount function', function() {
		expect(checkWordCount).toBeDefined();
	});

	it('returns false if string length > 100', function() {
		let test = "a";
		for (let x = 0; x < 100; x++) {
			test += 'a'; 
		}
		expect(checkWordCount(test)).toBe(false);
	});

	it('there should be a function defined duplicateCheck', function() {
		expect(duplicateCheck).toBeDefined();
	});

	it('there should not be duplicate words in the string', function() {
		let testString = "the quick brown fox jumped over the lazy dog's back fox";
		expect(duplicateCheck(testString)).toBe(false);
	});

	it('there should a function defined verifyAlphaNumeric', function() {
		expect(verifyAlphaNumeric).toBeDefined();
	})

	it('non alphanumeric strings should return false', function() {
		let testString = "22value";
		expect(verifyAlphaNumeric(testString)).toBe(false);
	})
});