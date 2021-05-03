function map(obj, fn) {
  const arr = []
  for (const key in obj) {
    arr.push(fn(obj[key]))
  }
  return arr
}

