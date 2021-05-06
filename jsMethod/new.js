// 1.创建一个对象  2. 将this指向这个对象 3.执行构造函数的方法 4. 返回这个对象
// 第一个参数代表构造函数
function newFn () {
  let o = new Object()
  const [fn, oArgs] = [ ...arguments]
  o.__proto__ = fn.prototype
  let result = fn.call(o,...oArgs)
  return  typeof result === 'object' ? result :  o
}

