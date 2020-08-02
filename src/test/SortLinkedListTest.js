const obj = require('../base/SortLinkedList')
const SortLinkedList = obj.SortLinkedList
let list = new SortLinkedList()
list.SortInsert(5)
list.SortInsert(6)
list.SortInsert(7)
list.SortInsert(8)
list.SortInsert(1)
list.SortInsert(2)
list.SortInsert(3)

let result = list.indexOf(3)
console.log(result)
console.log(list.toString())

