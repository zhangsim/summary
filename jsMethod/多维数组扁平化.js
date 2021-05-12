var arr = [1,2,[3,4,5,[6,7,8,9,10,11],12,13],14,15,16,[17,18],19,20]

function flat (arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flat(arr[i]))
    }else {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(flat(arr))

function flat2 (arr) {
  while (arr.some(item=>Array.isArray(item))){
    arr = [].concat(...arr)
  }
  return arr
}
console.log(flat2(arr))
