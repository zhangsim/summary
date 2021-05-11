function twoSum (arr, sum) {
  var map = new Map()
  for (let i = 0; i < arr.length; i++) {
    if(map.has(sum-arr[i])) {
      return [i,map.get(sum-arr[i])]
    } else {
      map.set(arr[i], i)
    }
  }
}
