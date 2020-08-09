// 找队列中的最大项
// var MaxQueue = function () {
//   this.items = {}
//   this.count = 0
//   this.lowestCount = 0
//   this.maxValue = { 0: -1 }
// }
//
// MaxQueue.prototype.max_value = function () {
//   return this.maxValue[0]
// }
//
// MaxQueue.prototype.push_back = function (value) {
//   if (this.isEmpty()) {
//     this.maxValue[0] = value
//     this.maxValue[value] = value
//   } else {
//     this.maxValue[0] = Math.max(this.maxValue[0], value)
//   }
//   this.items[this.count] = value
//   this.count++
// }
//
// MaxQueue.prototype.pop_front = function () {
//   if (this.isEmpty()) return -1
//   else {
//     let r = this.items[this.lowestCount]
//     this.lowestCount++
//     return r
//   }
// }
//
// MaxQueue.prototype.isEmpty = function () {
//   return this.count === this.lowestCount
// }
// var MaxQueue = function () {
//   this.queue1 = []
//   this.queue2 = []
// }
//
// MaxQueue.prototype.max_value = function () {
//   if (this.queue1.length !== 0) {return this.queue2[0]} else return -1
// }
//
// MaxQueue.prototype.push_back = function (value) {
//   if (this.queue1.length) {
//     while (value > this.queue2[this.queue2.length - 1] && this.queue2) {
//       this.queue2.pop()
//     }
//   }
//   this.queue1.push(value)
//   this.queue2.push(value)
// }
//
// MaxQueue.prototype.pop_front = function () {
//   if (this.queue1.length === 0) return -1
//   else {
//     let r = this.queue1.shift()
//     if (r === this.queue2[0]) {
//       this.queue2.shift()
//     }
//     return r
//   }
// }
//
// let queue = new MaxQueue()
// queue.push_back(1)
// queue.push_back(2)
// console.log(queue.max_value())
// queue.pop_front()
// console.log(queue.max_value())

// 排序结构体
// class list {
//   constructor () {
//     this.arr = []
//   }
//
//   init (x) {
//     this.arr.push(x)
//   }
//
//   toString () {
//     this.arr.toString()
//   }
//
//   swap (i, j) {
//     let temp = this.arr[i]
//     this.arr[i] = this.arr[j]
//     this.arr[j] = temp
//   }
//
//   chooseCenter (left, right) {
//     let center = Math.floor((left + right) / 2)
//     if (this.arr[left] > this.arr[center]) {
//       this.swap(left, center)
//     }
//     if (this.arr[center] > this.arr[right]) {
//       this.swap(center, right)
//     }
//     if (this.arr[left] > this.arr[center]) {
//       this.swap(left, center)
//     }
//     return center
//   }
//
//   quicksort (left, right) {
//     if (left >= right) return
//     let l = left, r = right
//     let center = this.arr[this.chooseCenter(left, right)]
//     while (true) {
//       while (this.arr[++l] < this.arr[center]) {}
//       while (this.arr[--r] > this.arr[center] && r > l) {}
//       if (l < r) {
//         this.swap(l, r)
//       } else {
//         this.swap(center, l)
//         break
//       }
//     }
//     this.quicksort(left, l - 1)
//     this.quicksort(l + 1, right)
//   }
//
//   chooseCenter (left, right) {
//     let center = Math.floor((left + right) / 2)
//     if (list1.arr[left] > list1.arr[center]) {
//       list1.swap(left, center)
//     }
//     if (list1.arr[center] > list1.arr[right]) {
//       list1.swap(center, right)
//     }
//     if (list1.arr[left] > list1.arr[center]) {
//       list1.swap(left, center)
//     }
//     return center
//   }
// }

// 快速排序
// let left = 0, right = a - 1
//

// 排序测试
// let list1 = new list()
// list1.init(1)
// list1.init(2)
// list1.init(13)
// list1.init(14)
// list1.init(-1)
// list1.init(-21)
// list1.init(0)
// let a = list1.arr.length
// list1.quicksort(0, a - 1)
// console.log(list1.arr)

// 冒泡排序
// for (let i = a - 1; i >= 0; i--) {
//   for (let j = 0; j < i; j++) {
//     if (list1.arr[j] > list1.arr[j + 1]) {
//       list1.swap(j, j + 1)
//     }
//   }
// }

// 选择排序
// for (let i = 0; i < a - 1; i++) {
//   let minIndex = i
//   for (let j = i; j <= a - 1; j++) {
//     if (list1.arr[j] < list1.arr[minIndex]) {
//       minIndex = j
//     }
//   }
//   list1.swap(i, minIndex)
// }

// 插入排序
// for (let i = 0; i <= a - 1; i++) {
//   let temp = list1.arr[i]
//   let j = i
//   while (temp < list1.arr[j - 1] && j > 0) {
//     list1.arr[j] = list1.arr[j-1]
//     j--
//   }
//   list1.arr[j] = temp
// }

// 希尔排序
// let gap = Math.floor(a / 2)
// while (gap >= 1) {
//   for (let i = gap; i < a; i++) {
//     let temp = list1.arr[i]
//     let j = i
//     while (j >= gap && temp < list1.arr[j - gap]) {
//       list1.arr[j] = list1.arr[j - gap]
//       j = j - gap
//     }
//     list1.arr[j] = temp
//   }
//   gap = Math.floor(gap / 2)
// }

// let arr = [11, 1, 1, 121, 1, 1, 1, 1, 1]
// arr = arr.filter((value, index, arr) => {
//   return arr.indexOf(value) === index
// })
// console.log(arr)

// 01010101反串数 有几个连续不一样
// const readline = require('readline');
// var s = readline()
// let count = 0
// let maxCount = 0
// for (let i = 0; i < s.length; i++) {
//   if (!(Number(s[i]) === Number(s[i + 1]))) {
//     count++
//     maxCount = count > maxCount ? count : maxCount
//   } else {
//     count = 0
//   }
// }
// console.log(maxCount)

// 小易可以活几天
// const readline = require('readline');
// let s = readline()
// let arr = s.split(' ')
// console.log(arr)
// let x = arr[0] - 0
// let f1 = arr[1] - 0
// let d = arr[2] - 0
// let p = arr[3] - 0
// let result
// result = f1 >= d / x ? Math.floor(d / x) : Math.floor((d + p * f1) / (p + x))
// console.log(result)
//
// const readline = require('readline');
// var s = readline()

// 小易给定你数字和系数。每次操作你可以将变成或者将变成。问至少几次操作使得。
// 第一行数据组数，对于每组数据，一行四个整数。
// var s = '1 59 1 2'
// var arr = s.split(' ')
// let A ,B ,p ,q
// [A ,B ,p ,q] = [arr[0],arr[1],arr[2],arr[3]]
// let T
// let base = (B - A) / p
// for(let i = 1;i<=10 ;i++){
//   if((q ** (i - 1)) >= base){
//     T = i
//     break
//   }
// }
// console.log(T)
function sortQuick (arr, left, right) {
  if (left >= right) return
  let l = left, r = right
  let middle = Math.floor((right + left) / 2)
  let middleVal = arr[middle]
  while (r >= l) {
    while (arr[l] < middleVal && r >= l) {
      l++
    }
    while (arr[r] > middleVal && r >= l) {
      r--
    }
    if (r >= l) {
      swap(arr, l, r)
      r--
      l++
    }
  }
  sortQuick(arr, left, r)
  sortQuick(arr, l, right)

  function swap (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}

let arr = [1, 11, 1, 1, 1, 2.8, 50, -9, -9, 0, 45, 45, 45, 45, 1, 1, 1, 28, 30, 120]
sortQuick(arr, 0, arr.length - 1)
console.log(arr)