function swap(a, b) {
  return a > b ? 1 : 0;
}

function bubbleSort(arr, comparator) {
  let i = 0;
  while (arr[i + 1]) {
    let currentIndex = arr[i];
    if (comparator(arr[i], arr[i + 1])) {
      arr[i] = arr[i + 1];
      arr[i + 1] = currentIndex;
    }
    i++;
  }
  return arr;
}
