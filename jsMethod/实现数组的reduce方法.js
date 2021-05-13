var arr = [1,2,3]
let  aaa = arr.reduce((a,b)=>{
  return 100 + a + b
}, 100)

console.log(aaa)




// reduce(callback(累加器,当前索引的元素,当前索引,调用的数据), 初始累加器（如果没有累加器是第一个元素,当前索引的元素从第二个元素开始）)

Array.prototype.reducenew = function (fn,initValue) {
  var arr = this
  var currentIndex = initValue ? 0 : 1
  var len = arr.length
}
