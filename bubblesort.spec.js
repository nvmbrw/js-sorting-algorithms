describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('sorts an array of numbers', function() {
    expect(bubbleSort([3, 4, 1, 9, 8, 5])).toEqual([1, 3, 4, 5, 8, 9]);
  });
});
