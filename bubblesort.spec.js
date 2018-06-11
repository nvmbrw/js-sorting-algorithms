describe('Bubble Sort', function() {
  function swap(a, b) {
    return a > b ? 1 : 0;
  }

  it('handles an empty array', function() {
    expect(bubbleSort([], swap)).toEqual([]);
  });
  it('sorts an array of numbers', function() {
    expect(bubbleSort([3, 4, 1, 9, 8, 5]), swap).toEqual([1, 3, 4, 5, 8, 9]);
  });
});
