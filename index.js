function map(obj, cb) {
  const arr = []
  for (const key in obj) {
    arr.push(cb(obj[key]))
  }
  return arr
}