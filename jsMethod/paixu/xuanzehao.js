var arr = require('./randomArr.js').arr
for (let j = 0; j < arr.length; j++) {
  minIndex = j
  for (let i = j; i < arr.length; i++) {
    if(arr[minIndex]> arr[i]){
      minIndex = i
    }
  }
  let temp = arr[j]
  arr[j] = arr[minIndex]
  arr[minIndex] = temp
}
console.log(arr)
