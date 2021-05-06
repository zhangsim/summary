function callFn () {
  let fn = this
  const [ obj, args ] = [...arguments]
  obj.fn = fn
  obj.fn(arg1, arg2)
  delete obj.fn
}
