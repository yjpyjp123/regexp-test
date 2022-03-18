let str = `
010 4555 the.
aofp@the.
sfsfafd The Foxddd =frozen
  `

///const repexp = new RegExp('the', 'gi')//

console.log(
  str.match(/(?<=@).{1,}/g)
)
