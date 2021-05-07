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
}
