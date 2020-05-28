const occurencesOf = function (char, str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++
  }
  return count
}

console.log(occurencesOf("l", "hello world"))
console.log(occurencesOf(" ", "bob likes tea"))
console.log(occurencesOf("c", "this is this"))
