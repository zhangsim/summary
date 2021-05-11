const arr1 = [1,2,3,4,5],
  arr2 = [5,6,7,8,9];

// 交集
let intersection = arr1.filter(function (val) { return arr2.indexOf(val) > -1 })

