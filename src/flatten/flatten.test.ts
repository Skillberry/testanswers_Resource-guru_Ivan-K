import { flatten } from './flatten';

it('expected [ 1, [ 2, [ 3 ] ], 4 ] flatten to [ 1, 2, 3, 4 ]', () => {
  expect(flatten([ 1, [ 2, [ 3 ] ], 4 ])).toEqual([ 1, 2, 3, 4 ]);
});

it('expected [[[ 3 ]]] flatten to [3]', () => {
  expect(flatten([[[3]]])).toEqual([3]);
});

it('expected flatten didn\'t change params', () => {
  const sourceArray = [ 1, [ 2, [ 3 ] ], 4 ];
  flatten(sourceArray);
  expect(sourceArray).toEqual(sourceArray);
});

it('expected [4, [[], [5] ]] flatten to [4, 5]', () => {
  expect(flatten( [4, [[], [5] ]] )).toEqual([4, 5]);
});


it('expected [4, [[undefined], [null], [5] ]] ) flatten to [4, undefined, null, 5]', () => {
  expect(flatten( [4, [[undefined], [null], [5] ]] )).toEqual([4, undefined, null, 5]);
});
