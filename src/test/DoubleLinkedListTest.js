const obj = require('../base/DoubleLinkedList')
const DoubleLinkedList = obj.DoubleLinkedList
let list = new DoubleLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.insert(533,3)
let result = list.indexOf(3,3)
console.log(result)
console.log(list.toString())

