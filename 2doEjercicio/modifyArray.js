function modifyArray(array) {
	return array.map(num => {
		if (num % 3 === 0 && num % 5 === 0) {
			return "FizzBuzz";
		} else if (num % 3 === 0 || num.toString().match(/3/) != null) {
			return "Fizz";
		} else if (num % 5 === 0 || num.toString().match(/5/) != null) {
			return "Buzz";
		} else {
			return '';
		} 
	});  
};
