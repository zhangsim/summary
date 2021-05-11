// function deepCopy (obj) {
//   let newObj =  Array.isArray(obj) ? [] : {}
//   if (obj && typeof obj === "object") {
//     for (var i in obj) {
//       if(obj.hasOwnProperty(i)) {
//         if(obj[i] && typeof obj[i] === "object") {
//           newObj[i] = deepCopy(obj[i])
//         } else {
//           newObj[i] = obj[i]
//         }
//       }
//     }
//   }
//   return newObj
// }


function deepCopy (obj) {
  var newObj = Array.isArray(obj) ? [] : {}
  if (newObj && typeof newObj === 'object') {
    for (var key in obj) {
      if(obj.hasOwnProperty(key)) {
        if(obj[key] && typeof obj[key] === 'object') {
          newObj[key] = deepCopy(obj[key])
        } else {
          newObj[key] = obj[key]
        }
      }
    }
  }
  return newObj
}
