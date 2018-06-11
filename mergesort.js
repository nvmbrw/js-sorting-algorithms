function split(wholeArray) {
  let firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2));
  let secondHalf = wholeArray.slice(Math.floor(wholeArray.length / 2));

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let mergedArr = [];
  while (arr2.length && arr1.length) {
    arr1[0] > arr2[0]
      ? mergedArr.push(arr2.shift())
      : mergedArr.push(arr1.shift());
  }

  arr1.length ? mergedArr.concat(arr1) : (mergedArr = mergedArr.concat(arr2));

  return mergedArr;
}

function mergeSort(array) {
  let firstHalf = split(array)[0];
  let secondHalf = split(array)[1];
  if (firstHalf.length === 1 || secondHalf.length === 1) {
    return merge(firstHalf, secondHalf);
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}
