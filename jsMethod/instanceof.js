function instanceOf (child, parent) {
  if(typeof child !== 'object' || child === null) return false;
  var parent1 = parent.prototype
  while (parent1) {
    if (child.__proto__ === parent1) {
      return true
    }
    parent1 = parent1.__proto__
  }
  return false
}
