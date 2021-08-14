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

it('correctly counts estimate (1/1/1)', () => {
  const [O, ML, P] = [1, 1, 1];
  const threePointEstimate = new ThreePointEstimate(O, ML, P);
  const PERT = new PertEstimate(threePointEstimate);
  expect(typeof PERT.estimate).toBe('number');
});
