// Exercism - Lucky Numbers

// Task 1 - Calculate the sum for the numbers on the slot machine

function twoSum(array1, array2) {
    return Number(array1.join('')) + Number(array2.join(''));
  }

// Task 2 - Determine if a number is a palindrome

function luckyNumber(value) {
    return value == String(value).split('').reverse().join('');
  }

// Task 3 - Generate an error message for invalid user input

function errorMessage(input) {
    if ((input == '') || (input === null) || (input === undefined)) {
      return 'Required field'
    } 
    return ((isNaN(input)) || (input == 0)) ? 'Must be a number besides 0' : '';
  }

// *****************************************************