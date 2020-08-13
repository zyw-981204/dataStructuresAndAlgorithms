const UtilObj = require('../utils/utils')
const compareResult = UtilObj.compareResult
const CompareResult = new compareResult()

class MaxHeap {
  constructor () {
    this.heap = []
  }

  compare (value1, value2) {
    if (value1 > value2) return CompareResult.BIGGER
    else if (value1 < value2) return CompareResult.SMALLER
    else return CompareResult.EQUAL
  }

  getLeftIndex (index) {
    return 2 * index + 1
  }

  getRightIndex (index) {
    return 2 * index + 2
  }

  swap (index1, index2) {
    let temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }

  getParentIndex (index) {
    if (index === 0) {
      return undefined
    }
    return Math.floor((index - 1) / 2)
  }

  insert (value) {
    if (value !== null) {
      this.heap.push(value)
      this.shiftUp(this.heap.length - 1)
      return true
    }
    return false
  }

  shiftUp (index) {
    if (this.size() === 1 || this.isEmpty()) {
      return true
    }
    let parentIndex = this.getParentIndex(index)
    if (this.compare(this.heap[index], this.heap[parentIndex]) === CompareResult.BIGGER) {
      this.swap(index, parentIndex)
      this.shiftUp(parentIndex)
    }
  }

  max () {
    return this.isEmpty() ? undefined : this.heap[0]
  }

  isEmpty () {
    return this.heap.length === 0
  }

  extract () {
    if (this.isEmpty()) {
      return undefined
    }
    let leftIndex = this.getLeftIndex(0)
    let rightIndex = this.getRightIndex(0)
    if (this.size() === 1) {
      return this.heap.shift()
    } else {
      let result = this.heap.shift()
      this.heap.unshift(this.heap.pop())
      this.shiftDown(0)
      return result
    }
  }

  size () {
    return this.heap.length
  }

  shiftDown (index) {
    if (index >= this.size()) return
    else {
      let leftIndex = this.getLeftIndex(index)
      let rightIndex = this.getRightIndex(index)
      let element = index
      let size = this.size()
      if (leftIndex < size && this.compare(this.heap[element], this.heap[leftIndex]) !== CompareResult.BIGGER) {
        element = leftIndex
      }
      if (rightIndex < size && this.compare(this.heap[element], this.heap[rightIndex]) !== CompareResult.BIGGER) {
        element = rightIndex
      }
      if (element !== index) {
        this.swap(element, index)
        this.shiftDown(element)
      }
    }
  }
}

let min = new MaxHeap()
min.insert(1)
min.insert(-3)
min.insert(5)
min.insert(10930 - 999)
min.insert(1630)
min.insert(150)
min.insert(120)
min.insert(-110)
min.insert(510)
min.insert(-10)
min.insert(100)
min.insert(-11100)
console.log(min.heap)
min.extract()
min.extract()
min.extract()
min.extract()
min.extract()
console.log(min.heap)
console.log(min.max())
