[![Release](https://github.com/AndreyProgr/estimate-js/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/AndreyProgr/estimate-js/actions)
[![CodeFactor](https://www.codefactor.io/repository/github/andreyprogr/estimate-js/badge)](https://www.codefactor.io/repository/github/andreyprogr/estimate-js)
[![stable](https://badges.github.io/stability-badges/dist/stable.svg)](https://github.com/badges/stability-badges)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![semver](https://img.shields.io/badge/semver-2.0.0-blue)
[![GitHub license](https://img.shields.io/github/license/AndreyProgr/estimate-js)](https://github.com/AndreyProgr/estimate-js/blob/master/LICENSE)
[![Test Coverage](https://api.codeclimate.com/v1/badges/93cd1ee73b4efea613b4/test_coverage)](https://codeclimate.com/github/AndreyProgr/estimate-js/test_coverage)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Downloads](https://img.shields.io/npm/dt/estimate-js.svg)](https://www.npmjs.com/package/estimate-js)
[![Maintainability](https://api.codeclimate.com/v1/badges/93cd1ee73b4efea613b4/maintainability)](https://codeclimate.com/github/AndreyProgr/estimate-js/maintainability)


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
