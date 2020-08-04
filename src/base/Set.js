class Set {
  constructor () {
    this.items = {}
  }

  has (element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  add (element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    } else {
      return false
    }
  }

  delete (element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  clear () {
    this.items = {}
    return true
  }

  size () {
    return Object.values(this.items).length
  }

  toString () {
    return Object.values(this.items).toString()
  }

  values () {
    return Object.values(this.items)
  }
}

class SetMethods {
  constructor () {
    this.AllSet = []
    this.SetA = {}
    this.SetB = {}
    this.Union = [] // 并集
    this.Intersection = []// 交集
    this.Subtraction = [] // 差集
  }

  into (a, b) {
    this.SetA = a
    this.SetB = b
    this.AllSet.push(a.values())
    this.AllSet.push(b.values())
  }

  abc () {
    this.Union = this.AllSet[1]
    this.AllSet[0].forEach((value) => {
      if (this.SetB.has(value)) {
        this.Intersection.push(value)
      } else {
        this.Union.push(value)
        this.Subtraction.push(value)
      }
    })
    this.AllSet[1].forEach((value) => {
      if (!this.SetA.has(value)) {
        this.Subtraction.push(value)
      }
    })
    return {
      setA: this.SetA.values(),
      SetB: this.SetB.values(),
      Intersection: this.Intersection,
      Union: this.Union,
      Subtraction: this.Subtraction
    }
  }

  isSunset () {
    this.abc()
    if (this.SetB === this.Intersection) {return true} else {return false}
  }
}

exports.Set = Set
exports.SetMethods = SetMethods