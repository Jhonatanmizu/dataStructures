/**
 * If the value is 1 or 0, return 1, otherwise return the value multiplied by the factorial of the
 * value minus 1.
 * @param value - The number to calculate the factorial of.
 * @returns The factorial of the value.
 */
function factorial(value) {
  if (value === 1 || value === 0) return 1;
  return value * factorial(value - 1);
}

/*
explanation:

5 * !4
!4  = 4 * 3!
3! = 3 * 2!
2! = 2 * 1!
result = 5 * 4 * 3 * 2 = 120
*/

/**
 * "If n is less than 1, return 0. If n is less than or equal to 2, return 1. Otherwise, return the sum
 * of the two previous values."
 *
 * The function is recursive because it calls itself
 * @param n - the number of digits in the Fibonacci number we want to calculate.
 * @returns The nth number in the fibonacci sequence.
 */
function fibonacci(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
