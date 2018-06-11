function split(wholeArray) {
  let firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2));
  let secondHalf = wholeArray.slice(Math.floor(wholeArray.length / 2));

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let mergedArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      mergedArr.push(arr2[j]);
      j++;
    } else {
      mergedArr.push(arr1[i]);
      i++;
    }
  }
  /*
    [1, 2, 3] [4, 5, 6]
          i^     j^
    arr2.slice(j) === [6]
  */
  if (i < arr1.length) {
    return mergedArr.concat(arr1.slice(i));
  } else {
    return mergedArr.concat(arr2.slice(j));
  }
}

function mergeSort(array) {
  let firstHalf = split(array)[0];
  let secondHalf = split(array)[1];

  console.log(firstHalf, secondHalf);
  if (array.length === 1) {
    return array;
  } else {
    /* if the array is not length 1, i.e. it is not already sorted, we want to
    split it into two sub-arrays, and if they are length 1, merge them. if not,
    keep running mergeSort until they are (they should eventually be lenght 1,
    since we are splitting them every recursive function call)
    */
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}
