const obj = require('../base/deque')
const DeQueue = obj.DeQueue

console.log(Object.prototype.toString.call(...'1231231231'))

function PalindromeChecker (str) {
  if (str === undefined || str === null || str.length === 0) {
    return false
  }
  let result = true
  let strCheck = new DeQueue()
  str = str.replace(/\s/g, '')
  //对空格进行过滤
  let arr = str.split('')
  arr.forEach(((value) => {
    strCheck.addBack(value)
  }))

  while (strCheck.size() > 1) {
    if (strCheck.removeBack() !== strCheck.removeFont()) {
      result = false
      break
    }
  }
  return result
}

console.log(PalindromeChecker('Aba'))