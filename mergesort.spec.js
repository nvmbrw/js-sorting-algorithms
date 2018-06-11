describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([0, 1, 2, 3])).toEqual([[0, 1], [2, 3]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
  });
  it('can deal with empty arrays', function() {
    expect(merge([], [])).toEqual([]);
  });
});

describe('mergeSort function', function() {
  it('sorts an array of numbers', function() {
    expect(mergeSort([3, 4, 1, 9, 8, 5])).toEqual([1, 3, 4, 5, 8, 9]);
  });
});
