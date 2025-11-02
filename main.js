/**
 * The main function which calls the application.
 * This application converts a number from the binary number system to the decimal number system (for a more detailed description of the application, see the algorithm).
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system or error message
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) { // 1.
  let decimalNumber = 0; // 1.1.

  // 1.2.
  if(/^[01]+$/.test(inputNumber)) { // 1.2.A.
    // 1.2.A.1.
    // 1.2.A.1.1.
    const binaryNumber = inputNumber; // 1.2.A.1.1.1.
    const reverseBinaryNumber = [...binaryNumber.toString()].reverse(); // 1.2.A.1.1.2.

    for (let i = 0; i < reverseBinaryNumber.length; i++) { // 1.2.A.1.2.
      // 1.2.A.1.2.1.
      const bit = reverseBinaryNumber[i]; // 1.2.A.1.2.1.1.

      // 1.2.A.1.2.1.2.
      if (bit === '1') { // 1.2.A.1.2.1.2.A.
        decimalNumber += 2 ** i; // 1.2.A.1.2.1.2.A.1.
      }
    }

    // 1.2.A.1.3.
    const dtoOut = decimalNumber.toString(); // 1.2.A.1.3.1.
    return dtoOut; // 1.2.A.1.3.2.
  } else { // 1.2.B.
    return '❌ Enter a valid binary number!'; // 1.2.B.1.
  }
}

/**
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
	return [2];
}

/**
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
	return [10];
}

/* console.log('TEST CASES:')
console.log(main('0'));
console.log(main('1'));
console.log(main('101'));
console.log(main('111010'));
console.log(main('0001'));
console.log(main('123'));
console.log(main('-100'));
console.log(main('a'));
console.log(main('')); */
