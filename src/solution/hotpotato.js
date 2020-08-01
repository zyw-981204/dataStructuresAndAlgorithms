const obj = require('../base/queue')
const Queue = obj.Queue

function hotPotota (elementList, num) {
  let queue = new Queue()
  let loser = []
  elementList.forEach((value) => {
    queue.enqueue(value)
  })
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    loser.push(queue.dequeue())
  }
  let winner = queue.peek()
  return {
    winner: winner,
    loser: loser
  }
}

let result = hotPotota(['周炜', '大壮', '小豪', '德刚', '四火'], 5009)
result.loser.forEach((value => {
  console.log(`${value}在游戏中被淘汰了`)
}))
console.log(`最后的胜利者为${result.winner}`)