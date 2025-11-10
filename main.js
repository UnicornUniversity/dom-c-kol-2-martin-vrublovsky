/**
 * The main function which calls the application.
 * This application converts a number from the binary number system to the decimal number system (for a more detailed description of the application, see the algorithm).
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system or error message
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  if (inputNumberSystem !== 2 || outputNumberSystem !== 10) {
    // console.log('❌ Unsupported number system(s)!');
    return '❌ Unsupported number system(s)!';
  }

  let decimalNumber = 0;

  if(/^[01]+$/.test(inputNumber)) {
    const binaryNumber = inputNumber;
    const reverseBinaryNumber = [...binaryNumber.toString()].reverse();

    for (let i = 0; i < reverseBinaryNumber.length; i++) {
      const bit = reverseBinaryNumber[i];

      if (bit === '1') {
        decimalNumber += 2 ** i;
      }
    }

    const dtoOut = decimalNumber.toString();
    // console.log(`✅ Decimal number: ${dtoOut}`);
    return dtoOut;
  } else {
    // console.log('❌ Enter a valid binary number!');
    return '❌ Enter a valid binary number!';
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

/* TEST CASES: */
// Binary numbers
/* main('0', 2, 10);
main('1', 2, 10);
main('101', 2, 10);
main('111010', 2, 10);
main('0001', 2, 10); */

// Not binary numbers
/* main('123', 2, 10);
main('-100', 2, 10);
main('a', 2, 10);
main('', 2, 10); */

// Wrong input or/and output number system(s)
/* main('110011101', 8, 10);
main('1011110', 2, 16);
main('111010101011', 10, 2); */
