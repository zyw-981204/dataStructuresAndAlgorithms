const obj = require('../base/stack')
const Stack = obj.StackWeakmap

function baseConverter (deNum, toWhat) {
  if (toWhat > 36 || (typeof toWhat) != 'number' || String(toWhat) === 'NaN') {
    return false
  } else {
    let stack = new Stack()
    let intoForm = toWhat === 32 ? '0123456789abcdefghjkmnpqrstvwxyz' : '0123456789abcdefghijklmnopqrstuvwxyz'
    let str = ''
    let rem = 0,
      quo = 0
    do {
      rem = deNum % toWhat
      quo = parseInt(deNum / toWhat)
      deNum = quo
      stack.push(rem)
    } while (quo >= 1) // 当商>=1的时候继续进行除法
    while (!stack.isEmpty()) {
      // 利用字符串可以用[]来取对应位置的字符的特性
      //利用栈的后进先出，对对应的结果进行倒序相加
      str += intoForm[stack.pop()]
    }
    return str
  }
}
console.log(baseConverter(2000, 32));