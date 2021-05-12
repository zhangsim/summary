// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000)
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000)
// }

// 那么 ES5 能不能实现 块级作用域 的效果呢? 可以的，我们可以利用闭包
for (var i = 0; i < 5; i++) {
  (function (index) {
    setTimeout(() => {
      console.log(index)
    }, 1000)
  })(i)
}
// 0 1 2 3 4
