# Welcome to Estimate JS contributing guide

This guide contains a set of rules that should be followed by all project contributors. 

Feel free to propose changes if you consider it necessary!

## Pull requests

Every change (except urgent ones) should be made with pull request feature. Use simple but descriptive branch names that reflect changes made within those branches.

Keep your pull requests small to speed up review process. Do not put several separate changes inside one pull request.

## CI checks

There are several checks that must be passed before PR can be merged. It's recommended to run them locally before pushing changes to GitHub (use npm scripts in package.json).

## Commits

Follow rules of [Conventional Commits](https://www.conventionalcommits.org/). Remember that *changelog will be generated based on that commit messages*.

It is highly recommended to use pre-configured npm scripts to commit new changes.

## Releases

Every change that impact build output or end-user docs will be automatically deployed to the npm registry.
