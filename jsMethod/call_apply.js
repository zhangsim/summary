function callFn () {
  let fn = this
  const [ obj, args ] = [...arguments]
  obj.fn = fn
  obj.fn(arg1, args)
  delete obj.fn
}
