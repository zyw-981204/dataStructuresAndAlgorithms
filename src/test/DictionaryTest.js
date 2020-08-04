const DictionaryObj = require('../base/Dictionary')
const Dictionary = DictionaryObj.Dictionary
let map = new Dictionary()
map.setKey({123:123}, 132123)
map.setKey(false, 132123)
map.setKey(true, 132123)
let a  = map.KeyAndValue()
console.log(a)
