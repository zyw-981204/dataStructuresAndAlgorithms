const BinarySearchTreeObj = require('./BinarySearchTree')
const BinarySearchTree = BinarySearchTreeObj.BinarySearchTree
const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
}

class Node {
  constructor (key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class AVLTree extends BinarySearchTree {
  constructor () {
    super()
    this.root = null
  }

  getNodeHeight (node) {
    if (node == null) {
      return -1
    } else {
      return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1
    }
  }

  getBalanceFactor (node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      case 2:
        return BalanceFactor.UNBALANCED_LEFT
      default:
        return BalanceFactor.BALANCED
    }
  }

  rotationLL (node) {
    const tmp = node.left
    node.left = tmp.right
    tmp.right = node
    return tmp
  }

  rotationRR (node) {
    const tmp = node.right
    node.right = tmp.left
    tmp.left = node
    return tmp
  }

  rotationLR (node) {
    node.left = this.rotationRR(node.left)
    return this.rotationLL(node)
  }

  rotationRL (node) {
    node.right = this.rotationLL(node.right)
    return this.rotationRR(node)
  }

  insert (key) {
    this.root = this.insertNode(this.root, key)
  }

  insertNode (node, key) {
    // 像在 BST 树中一样插入节点
    if (node == null) {
      return new Node(key)
    } else if (this.compare(key, node.key) === -1) {
      node.left = this.insertNode(node.left, key)
    } else if (this.compare(key, node.key) === 1) {
      node.right = this.insertNode(node.right, key)
    } else {
      return node // 重复的键
    }
    // 如果需要，将树进行平衡操作
    const balanceFactor = this.getBalanceFactor(node) // {1}
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) { // {2}
      if (this.compare(key, node.left.key) === -1) { // {3}
        node = this.rotationLL(node) // {4}
      } else {
        return this.rotationLR(node) // {5}
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) { // {6}
      if (
        this.compare(key, node.right.key) === 1
      ) { // {7}
        node = this.rotationRR(node) // {8}
      } else {
        return this.rotationRL(node) // {9}
      }
    }
    return node
  }

  removeNode (node, key) {
    node = super.removeNode(node, key) // {1}
    if (node == null) {
      return node // null，不需要进行平衡
    }
    // 检测树是否平衡
    const balanceFactor = this.getBalanceFactor(node) // {2}
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) { // {3}
      const balanceFactorLeft = this.getBalanceFactor(node.left) // {4}
      if (
        balanceFactorLeft === BalanceFactor.BALANCED ||
        balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) { // {5}
        return this.rotationLL(node) // {6}
      }
      if (
        balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) { // {7}
        return this.rotationLR(node.left) // {8}
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) { // {9}
      const balanceFactorRight = this.getBalanceFactor(node.right) // {10}
      if (
        balanceFactorRight === BalanceFactor.BALANCED ||
        balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) { // {11}
        return this.rotationRR(node) // {12}
      }
      if (
        balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) { // {13}
        return this.rotationRL(node.right) // {14}
      }
    }
    return node
  }
}