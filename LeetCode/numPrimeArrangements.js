function numPrimeArrangements (n) {
  function HowMany (num) {
    let arr = []
    for (let i = 1; i <= num; i++) {
      if (isPrimeNumber(i)) arr.push(i)
    }
    return arr.length
  }

  function isPrimeNumber (num) {
    if (num === 1) return false
    else {
      for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0 && i > 1) return false
      }
      return true
    }
  }

  function multiply (num) {
    let result = 1
    for (let i = 1; i <= num; i++) {
      result *= i
    }
    return result
  }

  let prime = HowMany(n)
  let notPrime = n - prime
  let a = multiply(prime)
  let b = multiply(notPrime)
  return a * b % 1000000007

}

console.log(numPrimeArrangements(100), 111)