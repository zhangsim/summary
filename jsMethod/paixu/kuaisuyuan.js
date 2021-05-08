var arr = require('./randomArr.js').arr
console.log('开始执行', arr)
function quick_sort(arr, from, to) {
  let i = from
  let j = to
  let key = arr[from]
  if (i >= j){
    return
  }
  while (i < j){
    while (arr[j] > key && i < j){
      j--
    }
    while (arr[i] <= key && i < j){
      i++
    }
    if(i < j){
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
  arr[from] = arr[i]
  arr[i] = key
  quick_sort(arr,from,i-1)
  quick_sort(arr,i+1,to)
}
quick_sort(arr,0,arr.length-1)
console.log('快速排序', arr)
