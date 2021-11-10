import PertEstimate from '.';
import ThreePointEstimate from '../ThreePointEstimate';

/**
 * Optimistic/MostLikely/Pessimistic
 */

it('correctly stores three point estimate', () => {
  const threePointEstimate = new ThreePointEstimate(2, 2, 2);
  const PERT = new PertEstimate(threePointEstimate);
  expect(PERT.threePointEstimate).toBe(threePointEstimate);
});

it.each([
  [1, 1, 1],
  [1, 2, 4],
  [4.5, 8.2, 11.5],
  [30, 45, 60],
  [9999, 99999, 999999],
])('correctly counts estimate', (O, ML, P) => {
  const threePointEstimate = new ThreePointEstimate(O, ML, P);
  const PERT = new PertEstimate(threePointEstimate);
  expect(PERT.estimate).toBe((O + (ML * 4) + P) / 6);
  expect(PERT.standartDeviation).toBe((P - O) / 6);
});
