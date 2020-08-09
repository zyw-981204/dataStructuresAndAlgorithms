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
    return this.isEmpty() ? undefined : this.heap[0]
  }

  isEmpty () {
    return this.heap.length === 0
  }

  min () {
    return this.isEmpty() ? undefined : this.heap[this.size() - 1]
  }

  extract () {
    if (this.isEmpty()) return undefined
    if (this.heap.length === 1) {
      return this.heap.shift()
    } else {
      this.swap(0, this.heap.length - 1)
      let result = this.heap.push()
      this.shiftDown(0)
      return result
    }
  }

  size () {
    return this.heap.length
  }

  shiftDown (index) {
    if (index === this.heap.length - 1) return true
    else {
      let right = this.getRightIndex(index)
      let left = this.getLeftIndex(index)
      if (left < this.size() && this.compare(index, left) === -1) {
        this.swap(index, left)
        index = left
      }
      if (right < this.size() && this.compare(index, right) === -1) {
        this.swap(index, right)
        index = right
      }
      if (this.heap[index] < Math.max(this.heap[left], this.heap[right])) {
        this.shiftDown(index)
      }
    }
  }
}


