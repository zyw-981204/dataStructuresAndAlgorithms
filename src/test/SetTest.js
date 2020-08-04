const SetObj = require('../base/Set')
const SetMethodsObj = require('../base/Set')
const Set = SetObj.Set
const SetMethods = SetMethodsObj.SetMethods
let set1 = new Set()
let set2 = new Set()
let setMethods = new SetMethods()
for (let i = 4; i < 10; i++) {
  set1.add(i)
}
set1.add(-1)
set1.add(-12)
for (let i = 4; i < 7; i++) {
  set2.add(i)
}


setMethods.into(set1, set2)
let a = setMethods.abc()
console.log(setMethods.isSunset())
console.log(101%10)