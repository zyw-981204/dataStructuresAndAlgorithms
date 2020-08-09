class MinHeap {
  constructor () {
    this.heap = []
  }

  compare (key1, key) {
    if (this.heap[key1] > this.heap[key]) return 1
    else return -1
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
    if (value != null) {
      this.heap.push(value)
      this.shiftUp(this.heap.length - 1)
      return true
    }
    return false
  }

  shiftUp (index) {
    let parent = this.getParentIndex(index)
    while (index > 0 && this.heap[index] < this.heap[parent]) {
      this.swap(index, parent)
      index = parent
      parent = this.getParentIndex(index)
    }
  }

  max () {
    return this.isEmpty() ? undefined : this.heap[this.heap.length - 1]
  }

  isEmpty () {
    return this.heap.length === 0
  }

  min () {
    return this.isEmpty() ? undefined : this.heap[0]
  }

  extract () { // 导出最大值或者最小值
    // if (this.isEmpty()) return undefined
    // if (this.heap.length === 1) {
    //   return this.heap.shift()
    // } else {
    //   this.swap(0, this.heap.length - 1)
    //   let result = this.heap.shift()
    //   this.shiftDown(0)
    //   return result
    // }
    if (this.isEmpty()) {
      return undefined; // {1}
    }
    if (this.size() === 1) {
      return this.heap.shift(); // {2}
    }
    const removedValue = this.heap.shift(); // {3}
    this.shiftDown(0); // {4}
    return removedValue; // {5}
  }

  size () {
    return this.heap.length
  }

  shiftDown (index) {
    if (index === this.heap.length - 1) return true
    else {
      let right = this.getRightIndex(index)
      let left = this.getLeftIndex(index)
      let element = index
      if (left < this.size() && this.compare(element, left) === 1) {
        element = left
      } else if (right < this.size() && this.compare(element, right) === 1) {
        element = right
      }
      if (element !== index) {
        this.swap(element, index)
        this.shiftDown(element)
      }
    }
  }
}

let min = new MinHeap()
for (let i = 10; i > 0; i--) {
  min.insert(i)
}
console.log(min.heap)
console.log(min.extract())
console.log(min.heap)