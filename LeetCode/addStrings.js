// 把字符串转化为数组 然后把两个数组位数补到一样
// function addString (num1, num2) {
//   let arr1 = num1.split(''), arr2 = num2.split(''), result = [],
//     arr1Len = arr1.length, arr2Len = arr2.length
//   let addLen = []
//   addLen.length = arr1Len - arr2Len > 0 ? arr1Len - arr2Len : -(arr1Len - arr2Len)
//   addLen.fill(0)
//   if (arr1Len < arr2Len) {
//     arr1.splice(0, 0, ...addLen)
//   } else {
//     arr2.splice(0, 0, ...addLen)
//   }
//   let x = 0
//   for (let i = arr1.length - 1; i >= 0; i--) {
//     x = arr1[i] * 1 + arr2[i] * 1
//     if (x > 9) {
//       if (i !== 0) {
//         x = x % 10
//         arr1[(i - 1)] = arr1[i - 1] * 1 + 1
//       }
//     }
//     result.unshift(x)
//   }
//   return result.join('')
// }
// 倒序求和 再倒回来
function addString (num1, num2) {
  let n1 = num1.split('').reverse()
  let n2 = num2.split('').reverse()
  let result = []
  let reminder = 0
  let MaxLen = Math.max(n1.length, n2.length), nn2, nn1
  if (n1.length > n2.length) {
    let temp
    temp = n1
    n1 = n2
    n2 = temp
  }
  for (let i = 0; i < MaxLen; i++) {
    nn1 = n1[i] - 0 || 0
    nn2 = n2[i] - 0 || 0
    if (i <= MaxLen - 2 && i >= 0) {
      // 默认n1较短
      n1[i + 1] = nn1 + nn2 > 9 ? (n1[i + 1] = (n1[i + 1] == null ? 0 : (n1[i + 1] - 0)) + 1) : n1[i + 1]
      // 在取值的时候要保证n1[i+1]！= null 并且不能为字符串
      reminder = (nn1 + nn2) % 10
    } else if (i === MaxLen - 1) {
      reminder = nn1 + nn2
    }
    result.push(reminder)
  }
  return result.reverse().join('')
}

console.log(addString('999', '999'))
// var addStrings = function(num1, num2) {
//   const a = num1.split('');
//   const b = num2.split('');
//   let cur = 0;
//   let res = '';
//   while(a.length || b.length || cur) {
//     const n1 = ~~a.pop();
//     const n2 = ~~b.pop();
//     cur += n1 + n2;
//     res += cur % 10;
//     cur = cur > 9 ? 1 : 0;
//   }
//   return res.split('').reverse().join('');
// };

// function addString (num1, num2) {
//   const n1 = num1.split('')
//   const n2 = num2.split('')
//   let result = []
//   let carry = 0, remainder = 0
//   while (n1.length || n2.length || carry) {
//     let nn1 = n1.pop() - 0 || 0
//     let nn2 = n2.pop() - 0 || 0
//     remainder = (nn1 + nn2 + carry) % 10 // 在判断余数和是否进位的时候记得加上前面的进位数
//     carry = (nn1 + nn2 + carry) > 9 ? 1 : 0
//     result.push(remainder)
//   }
//   return result.reverse().join('')
// }