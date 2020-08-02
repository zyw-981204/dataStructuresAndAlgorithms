const LinkedListObj = require('./LinkedList')
const LinkedList = LinkedListObj.LinkedList
const compare = {
  LESS_THAN: -1,
  BIGGER_THEN: 1
}
function compareFn (a, b) {
  if (a === b) {
    return 0
  }
  return a > b ? compare.BIGGER_THEN : compare.LESS_THAN

}

class SortLinkedList extends LinkedList {
  constructor () {
    super()
    this.compareFn = compareFn
  }

  getElementSortIndex (element) {
    if (this.isEmpty()) {
      return 0
    } else {
      let currentValue, result = this.size()
      for (let i = 0; i < this.size(); i++) {
        currentValue = this.getElementAt(i).element
        if (this.compareFn(element, currentValue) <= 0) {
          result = i
          break
        }
      }
      return result
    }
  }

  SortInsert (element) {
    let index
    index = this.getElementSortIndex(element)
    this.insert(element, index)
  }
}

exports.SortLinkedList = SortLinkedList