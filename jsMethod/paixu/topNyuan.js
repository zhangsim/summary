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
  arrs[i] = Math.floor(Math.random() * 50);
  // arrs[i] = i
}
console.log(arrs)
//构建初始堆
for (let i = 0; i < N; i++) {
  arr[i] = arrs[i];
}
// 初次建立size = 10的小顶堆以这十亿个整数中前10个数
console.log(arr)
//构建小顶堆
buildMinHeap(); // 将这前10个数没个非叶子结点堆调整建立小顶堆
// 此时arr是以前十个arrs组成的小跟堆
for (let i = N; i < LEN; i++) {
  // 此时模拟数据流 从第11个到第一亿个数分别进入 和小跟堆的堆顶比 比堆顶小的话就被淘汰，比堆顶大的话将其和堆顶交换，进行堆调整
  if (arrs[i] > arr[0]) {
    arr[0] = arrs[i];
    minHeap(0);
  }
}
console.log('一亿里面前十个元素', arr)

/**
 * 建小顶堆
 */
function buildMinHeap () {
  let size = len / 2 - 1;
  for (let i = size; i >= 0; i--) {
    minHeap(i);
  }
  console.log('初小跟堆', arr)
}

/**
 * i节点为根及子树是一个小堆
 * @param i
 */
// 堆调整的筛选
function minHeap (i) {
  var l = 2 * i + 1; // 左孩子

  var r = 2 * i + 2; // 右孩子
  var t // 存交换的暂时参数

  var index = i; // index 存最小坐标
  if (l < heapSize && arr[l] < arr[index]) {
    index = l;
  }
  if (r < heapSize && arr[r] < arr[index]) {
    index = r;
  }
  if (index != i) {

    t = arr[index];
    arr[index] = arr[i];
    arr[i] = t;
    //继续堆调整
    minHeap(index);
  }
}
