function toStrFn (item) {
  if (item === null) {
    return 'null'
  } else if (item === undefined) {
    return 'undefined'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}g`
  }
  return String(item)
}

class Dictionary {
  constructor () {
    this.toStrFn = toStrFn
    this.table = {}
  }

  hasKey (key) {
    return this.table.hasOwnProperty(this.toStrFn(key)) != null

  }

  setKey (key, value) {
    this.table[this.toStrFn(key)] = value
    return true
  }

  remove (key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    } else return false
  }

  get (key) {
    let r = this.table[this.toStrFn(key)] || undefined
    return r
  }

  keys () {
    return Object.keys(this.table)
  }

  values () {
    return Object.values(this.table)
  }

  KeyAndValue () {
    return this.keys().map(key => `${key}=>${this.table[key]}`)
  }

  size () {
    return this.keys().length
  }

  isEmpty () {
    return this.size() === 0
  }

  clear () {
    this.table = {}
    return true
  }
}

exports.Dictionary = Dictionary