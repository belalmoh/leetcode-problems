let steps = "UDDDUDUU".split('');

steps = steps.map((step) => step == 'U' ? 1 : -1)

let result = steps.reduce((prev, current) => prev+current)

console.log(steps)
console.log(result);