function slide (arr, left, right) {
  if (left >= right) return
  let middle = Math.floor((left + right) / 2)
  let middleVal = arr[middle]
  let l = left, r = right
  while (r >= l && l <= right && r >= left) {
    while (arr[l] < middleVal) {
      l++
    }
    while (arr[r] > middleVal) {
      r--
    }
    if (r >= l) {
      swap(arr, l, r)
      l++
      r--
    }
  }
  slide(arr, left, r)
  slide(arr, l, right)
}

function swap (arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

let arr = [1, 11, 1, 1, 1, 2.8, 50, -9, -9, 0, 45, 45, 45, 45, 1, 1, 1, 28, 30, 120]
slide(arr, 0, arr.length - 1)
console.log(arr)