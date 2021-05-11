// 实现字符串连续去重的函数 abbbbccddddbbbaa ===> abcdba
var str = 'abbbbccddddbbbaa'
function lianxu (str) {
  let newStr = str[0]
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i-1]) {
      newStr = newStr + str[i]
    }
  }
  return newStr
}

console.log(lianxu(str))
