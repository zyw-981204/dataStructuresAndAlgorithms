const path = require('path')

module.exports = {
  entry: '../test/BinarySearchTreeTest.js',  //输入文件
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',  //输出路径
    filename: 'bundle.js'// 输出文件
  }
}

