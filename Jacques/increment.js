let count = 0
let step = 1

export function increment () {
  count += step
  return count
}

export function decrement () {
  count -= step
  return count
}