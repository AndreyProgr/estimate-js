[![GitHub license](https://img.shields.io/github/license/AndreyProgr/estimate-js)](https://github.com/AndreyProgr/estimate-js/blob/develop/LICENSE)

Estimation tools set. Currently supported entities:
  - 3-Point
  - PERT

## Installation

With NPM:
```
npm i estimate-js -S
```
or using YARN:
```
yarn add estimate-js
```

## Usage

Import required entities to you code:

```
  import { ThreePointEstimate, PertEstimate } from 'estimate-js';
```

Perform operations you need:

```
  const threePointEstimate = new ThreePointEstimate(2, 3, 5);
  const PERTEstimate = new PertEstimate(threePointEstimate);

  const { estimate: E, standartDeviation: SD } = PERTEstimate;

  // 95% prob.
  console.log(E - (2 * SD), '-', E + (2 * SD));
```

## Contribution

Feel free to push new features and fixes with GitHub Pull Requests. Remember to keep your PRs small and use GitFlow branch prefixes.
