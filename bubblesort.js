function bubbleSort(arr, comparator) {
  if (!comparator) {
    comparator = function(a, b) {
      return a > b ? 1 : 0;
    };
  }

  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 1; i < arr.length; i++) {
      let currentIndex = arr[i - 1];
      if (comparator(arr[i - 1], arr[i])) {
        arr[i - 1] = arr[i];
        arr[i] = currentIndex;
        swapped = true;
      }
    }
  }
  return arr;
}
