export interface IThreePointEstimate {
  readonly optimistic: number;
  readonly mostLikely: number;
  readonly pessimistic: number;
}

export interface IPERTEstimate {
  readonly estimate: number;
  readonly standartDeviation: number;
  readonly threePointEstimate: IThreePointEstimate;
}
