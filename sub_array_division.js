function birthday(s, d, m) {
    // Write your code here
    let count = 0;
    let visited = {};
    if(s.length === 1 && s[0] === d) return 1;
    for(var i = 0; i < s.length; i++) {
        for(var j = 0; j < s.length; j++) {
            if(i == j) continue;
            let pairs = i < j ? {[`${i},${j}`]: 1} : {[`${j},${i}`]: 1};
            if(s[i] + s[j] === d && !(`${i},${j}` in visited)) {
                count += 1;
                visited = {...visited, ...pairs}
            }
        }
    }
    console.log(visited);
    return count;
}

let s = [1, 2, 1, 3, 2];
let d = 3; // sum
let m = 2; // elements

const result = birthday(s, d, m);

console.log(result);