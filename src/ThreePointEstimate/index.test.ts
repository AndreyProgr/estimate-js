import ThreePointEstimate from '.';

/**
 * O == Optimistic
 * ML == Most Likely
 * P == Pessimistic
 */

it('is created with correct data', () => {
  const instance = new ThreePointEstimate(1, 2, 6.5);
  expect(instance.optimistic).toBe(1);
  expect(instance.mostLikely).toBe(2);
  expect(instance.pessimistic).toBe(6.5);
});

it('is created with O === ML === P', () => {
  const instance = new ThreePointEstimate(10, 10, 10);
  expect(instance.optimistic).toBe(10);
  expect(instance.mostLikely).toBe(10);
  expect(instance.pessimistic).toBe(10);
});

it('handles wrong O type', () => {
  expect(() => new ThreePointEstimate(null, 1, 1)).toThrowError();
  expect(() => new ThreePointEstimate(NaN, 1, 1)).toThrowError();
  expect(() => new ThreePointEstimate(Infinity, 1, 1)).toThrowError();
  expect(() => new ThreePointEstimate(-Infinity, 1, 1)).toThrowError();
  expect(() => new ThreePointEstimate(undefined, 1, 1)).toThrowError();
});

it('handles wrong ML type', () => {
  expect(() => new ThreePointEstimate(1, null, 1)).toThrowError();
  expect(() => new ThreePointEstimate(1, NaN, 1)).toThrowError();
  expect(() => new ThreePointEstimate(1, Infinity, 1)).toThrowError();
  expect(() => new ThreePointEstimate(1, -Infinity, 1)).toThrowError();
  expect(() => new ThreePointEstimate(1, undefined, 1)).toThrowError();
});

it('handles wrong P type', () => {
  expect(() => new ThreePointEstimate(1, 1, null)).toThrowError();
  expect(() => new ThreePointEstimate(1, 1, NaN)).toThrowError();
  expect(() => new ThreePointEstimate(1, 1, Infinity)).toThrowError();
  expect(() => new ThreePointEstimate(1, 1, -Infinity)).toThrowError();
  expect(() => new ThreePointEstimate(1, 1, undefined)).toThrowError();
});

it('handles O <= 0', () => {
  expect(() => new ThreePointEstimate(0, 1, 1)).toThrowError();
  expect(() => new ThreePointEstimate(-1, 1, 1)).toThrowError();
});

it('handles O > ML', () => {
  expect(() => new ThreePointEstimate(2, 1, 3)).toThrowError();
});

it('handles ML > P', () => {
  expect(() => new ThreePointEstimate(1, 3, 2)).toThrowError();
});
