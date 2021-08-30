import { IPERTEstimate, IThreePointEstimate } from '../types';

/**
 * PERT estimate value object.
 * [Wikipedia](
 * https://en.wikipedia.org/wiki/Program_evaluation_and_review_technique)
 */
class PERTEstimate implements IPERTEstimate {
  constructor(threePointEstimate: IThreePointEstimate) {
    this._threePointEstimate = threePointEstimate;
  }

  /**
   * 3-point estimate value object.
   */
  get threePointEstimate() {
    return this._threePointEstimate;
  }
  private _threePointEstimate: IThreePointEstimate;

  /**
   * Mean estimate.
   */
  get estimate() {
    const { optimistic, mostLikely, pessimistic } = this._threePointEstimate;
    return (optimistic + (4 * mostLikely) + pessimistic) / 6;
  }

  /**
   * Standart deviation (σ).
   */
  get standartDeviation() {
    const { optimistic, pessimistic } = this._threePointEstimate;
    return (pessimistic - optimistic) / 6;
  }
}

export default PERTEstimate;
