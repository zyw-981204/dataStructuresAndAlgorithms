class Node {
  constructor (key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor (props) {
    this.root = null

  }

  compare (key1, key) {
    if (key1 > key) return 1
    else return -1
  }

  insert (key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode (node, key) {
    if (this.compare(node.key, key) === 1) {
      if (node.left == null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  inOrderTraverse (callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode (node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  preOrderTraverse (callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode (node, callback) {
    if (node != null) {
      callback(node.key)
      this.inOrderTraverseNode(node.left, callback)
      this.inOrderTraverseNode(node.right, callback)

    }
  }

  postOrderTraverse (callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode (node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback)
      this.inOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  min () {
    return this.minNode(this.root)
  }

  minNode (node) {
    let current = node
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }

  max () {
    return this.maxNode(this.root)
  }

  maxNode (node) {
    let current = node
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }

  search (key) {
    return this.searchKey(this.root, key)
  }

  searchKey (node, key) {
    if (node != null) {
      if (key === node.key) return true
      else if (key < node.key) {
        return this.searchKey(node.left, key)
      } else {
        return this.searchKey(node.right, key)
      }
    } else {
      return false
    }
  }

  remove (key) {
    this.root = this.removeNode(this.root, key)
  }

  removeNode (node, key) {
    if (node == null) {
      return null
    }
    let result
    if (key > node.key) {
      this.removeNode(node.right, key)
      return node
    } else if (key < node.key) {
      this.removeNode(node.left, key)
      return node
    } else {
      if (node.left == null && node.right == null) {
        node = null
        return node
      } else if (node.left == null || node.right == null) {
        node = node.left == null ? node.right : node.left
        return node
      } else {
        let auto = this.minNode(node.right)
        node.key = auto.key
        this.removeNode(node.right, auto.key)
        return node
      }
    }
  }
}

exports.BinarySearchTree = BinarySearchTree