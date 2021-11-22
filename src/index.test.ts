import DefaultExport, * as NonDefaultExport from '.';

it('default export content matches non-default', () => {
  // "default" property always exists inside non-default (*) import
  expect([...Object.keys(DefaultExport), 'default'])
    .toEqual(Object.keys(NonDefaultExport));
});
