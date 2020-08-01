const _items = Symbol('items')
const a = 1
    // 使用数组实现栈 用symbol对栈内元素进行保护
const StackArray = class StackArray {
    constructor() {
        this[_items] = [];
    }
    push(element) {
        this[_items].push(element)
    }
    pop() {
        this[_items].pop()
    }
    peek() {
        return this[_items][this.size() - 1]
    }
    isEmpty() {
        return this[_items].length === 0
    }
    clear() {
        this[_items] = []
    }
    toString() {
        return this[_items].toString()
    }
    size() {
        return this[_items].length
    }
}
const _MapItem = new WeakMap()
const StackWeakmap = class StackWeakmap {
    constructor() {
        _MapItem.set(this, [...arguments])
    }
    push(element) {
        let s = _MapItem.get(this)
        s.push(element)
    }
    pop() {
        let s = this.getStack()
        let r = s.pop()
        return r
    }
    getStack() {
        let s = _MapItem.get(this)
        return s
    }
    size() {
        let s = this.getStack()
        return s.length
    }
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        let s = this.getStack()
        let r = s[this.size() - 1]
        return r
    }
    isEmpty() {
        return this.size() === 0
    }
    toString() {
        return this.getStack().toString()
    }
}
exports.a = a
exports.StackArray = StackArray
exports.StackWeakmap = StackWeakmap