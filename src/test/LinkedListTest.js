const obj = require('../base/LinkedList')
const LinkedList = obj.LinkedList
let list = new LinkedList()
list.push(0)
list.push(1)
list.push(1)
list.insert(20, 0)
console.log(list.toString())
