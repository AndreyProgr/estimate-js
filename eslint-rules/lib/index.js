/* eslint-disable padding-line-between-statements */
/* eslint-disable @typescript-eslint/no-var-requires */
const prohibitNewlineInFunctionBody =
  require('./rules/prohibit-newline-in-function-body');

module.exports.rules = {
  'prohibit-newline-in-function-body': prohibitNewlineInFunctionBody,
};
