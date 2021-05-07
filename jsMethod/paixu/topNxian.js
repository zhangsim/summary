var N = 8;         //Top10
var LEN = 20; //1亿个整数
var arrs = []; // 装1亿整数的数组
var arr = [] ; // 装十个整数的数组
//数组长度
var len = 8;
//堆中元素的有效元素 heapSize<=len
var heapSize = len;
//生成随机数组
for (let i = 0; i < LEN; i++) {
  arrs[i] = Math.floor(Math.random() * 100); // Math.random() 函数返回一个浮点数,  伪随机数在范围从0到小于1 Math.floor() 返回小于或等于一个给定数字的最大整数。
  // arrs[i] = i
}
//构建初始堆
for (let i = 0; i < N; i++) {
  arr[i] = arrs[i]
}
// 初次建立size = 10的小顶堆以这十亿个整数中前10个数
for (let i = len / 2 - 1; i >= 0; i++) {
  // 每一个元素堆调整
  minHeap(i)
}
// 现在arr就是小根堆 堆顶最小 这时候 8外的数和这个堆顶比  比堆顶小的话 直接pass 比堆顶大的话 和堆顶互换 然后进行堆调整 之后在循环比较
for (let i = N; i < LEN; i++) {
  if (arr[i]>arr[0]) {
    arr[0] = arr[i]
    minHeap(0)
  }
}
console.log('一亿里面前十个元素', arr)
/**
 * i节点为根及子树是一个小堆
 * @param i
 */
// 堆调整的筛选
function minHeap(i) {
  let left = 2*i-1
  let right = 2*i+1
  let small = i
  if(left<heapSize && arr[left] < arr[small]) {
    small = left
  }
  if(right<heapSize && arr[right] < arr[small]) {
    small = right
  }
  let t // 存交换的暂时参数
  if (small !== i) {
    t = arr[small]
    arr[small] = arr[i]
    arr[i] = t
    minHeap(small)
  }
}
