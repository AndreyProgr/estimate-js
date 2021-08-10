import * as Yup from 'yup';
import { IThreePointEstimate } from '../types';

/**
 * 3-point estimate value object.
 * [Wikipedia](https://en.wikipedia.org/wiki/Three-point_estimation)
 */
class ThreePointEstimate implements IThreePointEstimate {
  constructor(
    optimistic: number,
    mostLikely: number,
    pessimistic: number,
  ) {
    ThreePointEstimate.ValidationScheme
      .validateSync({ optimistic, mostLikely, pessimistic });
    this._optimistic = optimistic;
    this._mostLikely = mostLikely;
    this._pessimistic = pessimistic;
  }

  /**
   * Best case scenario.
   */
  get optimistic() {
    return this._optimistic;
  }
  private _optimistic: number;

  /**
   * Assuming the most likely risks have occurred.
   */
  get mostLikely() {
    return this._mostLikely;
  }
  private _mostLikely: number;

  /**
   * Worst case scenario.
   */
  get pessimistic() {
    return this._pessimistic;
  }
  private _pessimistic: number;

  /**
   * Yup-based validation scheme for 3-point data.
   */
  static ValidationScheme = Yup
    .object()
    .shape({
      optimistic:
        Yup.number().required().lessThan(Infinity).moreThan(0),
      mostLikely:
        Yup.number().required().lessThan(Infinity).min(Yup.ref('optimistic')),
      pessimistic:
        Yup.number().required().lessThan(Infinity).min(Yup.ref('mostLikely')),
    });
}

export default ThreePointEstimate;
