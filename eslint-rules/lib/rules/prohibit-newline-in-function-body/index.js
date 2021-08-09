/* eslint-disable max-len */
/* eslint-disable lines-around-comment */
/* eslint-disable padding-line-between-statements */

module.exports = {
  create: function (context) {
    const sourceCode = context.getSourceCode();
    const { lines } = sourceCode;
    const processFunction = (node) => {
      const startLineIndex = node.loc.start.line - 1;
      const endLineIndex = node.loc.end.line - 1;
      for (let i = startLineIndex; i <= endLineIndex; ++i) {
        const line = lines[i];
        if (line.trim() === '') {
          context.report({
            message: 'Newlines inside a function body is prohibited!',
            loc: {
              start: { line: i + 1, column: 0 },
              end: { line: i + 1, column: 2 },
            },
          });
        }
      }
    };
    return {
      FunctionExpression: processFunction,
      FunctionDeclaration: processFunction,
      ArrowFunctionExpression: processFunction,
    };
  },
};
