import ThreePointEstimate from '.';

/**
 * O == Optimistic
 * ML == Most Likely
 * P == Pessimistic
 */

it.each([
  [1, 2, 6.5],
  [10, 10, 10],
  [1, 1, Number.MAX_SAFE_INTEGER],
])('is created with correct data', (O, ML, P) => {
  const instance = new ThreePointEstimate(O, ML, P);
  expect(instance.optimistic).toBe(O);
  expect(instance.mostLikely).toBe(ML);
  expect(instance.pessimistic).toBe(P);
});

it.each([
  null, NaN, Infinity, -Infinity, undefined,
])('handles wrong input data types', (wrongValue) => {
  expect(() => new ThreePointEstimate(wrongValue, 1, 1)).toThrowError();
  expect(() => new ThreePointEstimate(1, wrongValue, 1)).toThrowError();
  expect(() => new ThreePointEstimate(1, 1, wrongValue)).toThrowError();
});

it.each([
  [0, 1, 1],
  [-1, 1, 1],
  [2, 1, 3],
  [1, 3, 2],
])('handles unacceptable input data', (O, ML, P) => {
  expect(() => new ThreePointEstimate(O, ML, P)).toThrowError();
  expect(() => new ThreePointEstimate(O, ML, P)).toThrowError();
});
