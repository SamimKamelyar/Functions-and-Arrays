function product() {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      total = total * arr[i]
      // total += arr[i]
    }
  }
  return total
}