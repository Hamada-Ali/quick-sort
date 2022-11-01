// quick sort
const quickSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1]; // last index in the array
  let leftArr = [];
  let rightArr = [];
  for (i=0;i<arr.length-1;i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
      // return
    if (leftArr.length > 0 && rightArr.length > 0) {
      return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    } else if (leftArr.length > 0) {
      return [...quickSort(leftArr), pivot];
    } else {
      return [pivot, ...quickSort(rightArr)];
    }
}
console.log(quickSort([21, 1, 3, 5, 6 ,2, 7]))