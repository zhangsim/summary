for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if(arr[i]>arr[j]) {
      [arr[i],arr[j]] = [arr[j],arr[i]]
    }
  }
}
