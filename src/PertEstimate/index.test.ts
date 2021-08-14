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
  expect(PERT.estimate).toBe((O + (ML * 4) + P) / 6);
  expect(PERT.standartDeviation).toBe((P - O) / 6);
});

it('correctly counts estimate (1/2/4)', () => {
  const [O, ML, P] = [1, 2, 4];
  const threePointEstimate = new ThreePointEstimate(O, ML, P);
  const PERT = new PertEstimate(threePointEstimate);
  expect(PERT.estimate).toBe((O + (ML * 4) + P) / 6);
  expect(PERT.standartDeviation).toBe((P - O) / 6);
});

it('correctly counts estimate (4.5/8.2/11.5)', () => {
  const [O, ML, P] = [4.5, 8.2, 11.5];
  const threePointEstimate = new ThreePointEstimate(O, ML, P);
  const PERT = new PertEstimate(threePointEstimate);
  expect(PERT.estimate).toBe((O + (ML * 4) + P) / 6);
  expect(PERT.standartDeviation).toBe((P - O) / 6);
});

it('correctly counts estimate (30/45/60)', () => {
  const [O, ML, P] = [30, 45, 60];
  const threePointEstimate = new ThreePointEstimate(O, ML, P);
  const PERT = new PertEstimate(threePointEstimate);
  expect(PERT.estimate).toBe((O + (ML * 4) + P) / 6);
  expect(PERT.standartDeviation).toBe((P - O) / 6);
});
