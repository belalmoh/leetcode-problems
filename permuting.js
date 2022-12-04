function twoArrays(k, first, second) {
    // Write your code here
    let [A, B] = [first, second];

    A = A.sort().reverse();
    B = B.sort();

    let counter = 0;
    
    for(var i = 0; i < A.length; i++) {
        if(A[i] + B[i] < k) {
            return "NO";
        }
    }

    return "YES";
}

const A = [4, 4, 3, 2, 1, 4, 4, 3, 2, 4]
const B = [2, 3, 0, 1, 1, 3, 1, 0, 0, 2]
const k = 4;

// const result = twoArrays(k, A, B);
// console.log(result);

console.log(A.sort().reverse())
console.log(A.sort((a, b) => a - b).reverse())