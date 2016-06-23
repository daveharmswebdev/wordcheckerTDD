var checkWordCount = function(string) {
	return string.length > 100 ? false : true;
};

var duplicateCheck = function(string) {
	string = string.split(' ').sort();
	for (var x = 0; x < string.length - 1; x++) {
		if (string[x] === string[x + 1]) return false;
	}
	return true;
};

var verifyAlphaNumeric = function(string) {
	return /[^a-zA-Z\d\s]/g.test(string);
};