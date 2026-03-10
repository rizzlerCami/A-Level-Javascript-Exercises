function mergeSort(list) {
  if (list.length <= 1) {
    return list
  }
  let mid = Math.floor(list.length / 2)
  let left = mergeSort(list.slice(0, mid))
  let right = mergeSort(list.slice(mid))
   let mergedList = []
  let leftPointer = 0
  let rightPointer = 0
  while (leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] < right[rightPointer]) {
      mergedList.push(left[leftPointer])
      leftPointer++
    } else {
      mergedList.push(right[rightPointer])
      rightPointer++
    }
  }
  while (leftPointer < left.length) {
    mergedList.push(left[leftPointer])
      leftPointer++
  }
  while (rightPointer < right.length) {
    mergedList.push(right[rightPointer])
      rightPointer++
  }
return mergedList
}

function quickSort(arr, low, high) {
  if (low >= high) {
    return
  }
  let i = low
  let temp
  for (let j = low; j <= high; j++) {
    if (arr[j] <= arr[high]) {
      temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp
      i++
    }
  }
  
  quickSort(arr, low, i - 2)
  quickSort(arr, i, high)
  return arr
}