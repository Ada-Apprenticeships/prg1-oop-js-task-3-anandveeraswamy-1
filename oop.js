PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };


function validInteger(value) {
  // Check if value is a number
  if (typeof value === 'number') {
      // Return true for positive integers and zero
      return Number.isInteger(value) && value >= 0;
  }

  // Check if value is a string
  if (typeof value === 'string') {
      // Trim the string
      const trimmedValue = value.trim();

      // Check if the trimmed value is empty
      if (trimmedValue.length === 0) {
          return false; // Empty string is invalid
      }

      // Use regex to check if it represents a valid positive integer
      // This regex matches whole numbers only (e.g., 1, 2, 3), and excludes negatives and decimals
      const isInteger = /^\d+$/.test(trimmedValue);
      
      // Convert to a number
      const num = Number(trimmedValue);

      // Return true if it's a valid non-negative integer
      return isInteger && num >= 0; // num should be >= 0 to cover '0'
  }

  // If the value is neither a string nor a number, return false
  return false;
}

// tests for validInteger(value)
/*console.log(validInteger(42));         // true
console.log(validInteger('42'));       // true
console.log(validInteger('  42  '));   // true
console.log(validInteger(-42));        // false
console.log(validInteger(0));          // false
console.log(validInteger('0'));        // false
console.log(validInteger('42.5'));     // false
console.log(validInteger('abc'));      // false
console.log(validInteger(''));         // false*/
let l3 = [ '-0', 'A','0A', '1.0', 'A0', '', ' ', '.' ];
      for(let i of l3){
        console.log(validInteger(i)); 
    }




function validatePriority(priority) { // value can be a string or a number (integer)
  // Define valid priorities
  const validPriorities = [1, 3, 5, 7];

  // Check if the value is a number and is in the valid priorities
  if (validInteger(priority) && validPriorities.includes(priority)) {
    if(typeof priority === 'string') {
      const numValue = parseInt(priority, 10); // Convert string to integer
      return numValue;
    }
    else {
      return priority;
    }      
  }


  return 1; // LOW priority
}

// Example usage:
console.log(validatePriority(1));         // Output: 1
console.log(validatePriority(3));         // Output: 3
console.log(validatePriority(5));         // Output: 5
console.log(validatePriority(7));         // Output: 7
console.log(validatePriority(2));         // Output: 1 (LOW priority)
console.log(validatePriority('5'));       // Output: 5
console.log(validatePriority('3'));       // Output: 3
console.log(validatePriority('invalid'));  // Output: 1 (LOW priority)
console.log(validatePriority(''));        // Output: 1 (LOW priority)
console.log(validatePriority(null));      // Output: 1 (LOW priority)


function todaysDate () {
  
}


class Task  {

  // (title, priority)
}


class ToDo {
    
}








// Leave this code here for the automated tests
module.exports = {
  PRIORITY, validInteger, validatePriority, todaysDate, ToDo, Task,
}