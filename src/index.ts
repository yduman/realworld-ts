/**
 * @packageDocumentation package documentation goes here
 */

/**
 * avg function
 *
 * @param a - first number
 * @param b - second number
 * @param c - third number
 *
 * @public
 */
export function avg(a: number, b: number, c: number): number {
  return sum3(a, b, c) / 3;
}

/**
 * sum3 function
 *
 * @param a - first number
 * @param b - second number
 * @param c - third number
 *
 * @beta
 */
export function sum3(a: number, b: number, c: number): number {
  return sum2(a, sum2(b, c));
}

/**
 * sum2 function
 *
 * @param a - first number
 * @param b - second number
 *
 * @internal
 */
export function sum2(a: number, b: number): number {
  const sum = a + b;
  return sum;
}
