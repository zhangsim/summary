function fangdou() {
  var timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      console.log(111)
    },1000)
  }
}

function jieliu () {
  var timer = false
  return function () {
    if (timer) return
    timer = true
    setTimeout(()=>{
      timer = false
    },1000)
  }
}

function throttle(fn,delay){
  let valid = true
  return function() {
    if(!valid){
      //休息时间 暂不接客
      return false
    }
    // 工作时间，执行函数并且在间隔期内把状态位设为无效
    valid = false
    setTimeout(() => {
      fn()
      valid = true;
    }, delay)
  }
}
/* 请注意，节流函数并不止上面这种实现方案,
   例如可以完全不借助setTimeout，可以把状态位换成时间戳，然后利用时间戳差值是否大于指定间隔时间来做判定。
   也可以直接将setTimeout的返回的标记当做判断条件-判断当前定时器是否存在，如果存在表示还在冷却，并且在执行fn之后消除定时器表示激活，原理都一样
    */
