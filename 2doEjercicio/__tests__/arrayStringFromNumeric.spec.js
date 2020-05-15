const modifyArray = (array) => {
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

describe("Funcion nuevo array de strings", () => {
	test("Ejemplo 1: debería retornar un array de string segun condiciones", () => {
		const arrayDeNumeros1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

		const output = ['FizzBuzz','','','Fizz','','Buzz','Fizz','','','Fizz','Buzz','','Fizz','Fizz','','FizzBuzz'];

		expect(modifyArray(arrayDeNumeros1)).toEqual(output);
	});
  
	test("Ejemplo 2: debería retornar un array de string segun condiciones", () => {
		const arrayDeNumeros2 = [30, 31, 32, 33, 34, 35, 50, 51, 52, 53, 54, 55, 56, 57, 58];

		const output = ['FizzBuzz','Fizz','Fizz','Fizz','Fizz','Fizz','Buzz','Fizz','Buzz','Fizz','Fizz','Buzz','Buzz','Fizz','Buzz'];

		expect(modifyArray(arrayDeNumeros2)).toEqual(output);
	});
});