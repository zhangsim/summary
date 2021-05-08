function quick_sort(arr, from, to) {
  var key = arr[from]
  var i = from
  var j = to
  if (i >= j){
    return
  }
  while (i<j) {
    if (i<j && arr[j] > key) {
      j--
    }
    if (i<j && arr[i] <= key) {
      i++
    }
    if(i < j){
      let temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp
    }
  }
  arr[from] = arr[i]
  arr[i] = key
  quick_sort(arr, from, i-1)
  quick_sort(arr, i+1, to)
}
