// function flippingMatrix(matrix) {
//     // Write your code here
//     let quadLimit = matrix.length / 2;
//     let quadTotalSum = 0;
    
//     for(var i = 0; i < matrix.length; i++) {
//         let firstQuad = matrix[i].slice(0, quadLimit).reduce((p, c) => p+c)
//         let secondQuad = matrix[i].slice(quadLimit, matrix.length).reduce((p, c) => p+c)
        
//         if(firstQuad < secondQuad) {
//             matrix[i] = matrix[i].reverse()
//         }

//         // let firstQuadC = matrix.map((v) => v[i]).slice(0, quadLimit).reduce((p, c) => p+c)
//         // let secondQuadC = matrix.map((v) => v[i]).slice(quadLimit, matrix.length).reduce((p, c) => p+c)

//         // if(firstQuadC < secondQuadC) {
//         //     let spare = matrix.map((v) => v[i]).reverse();
//         // }
//     }
//     // matrix = matrix.reverse();
//     for(var i = 0; i < quadLimit; i++) {
//         for(var j = 0; j < quadLimit; j++) {
//             quadTotalSum += matrix[i][j];
//         }
//     }

//     return {matrix};
    
// }


function flippingMatrix(matrix) {
    let n = matrix.length / 2;
    let max = 0; 
    let total = 0;

    for(let row = 0; row < n; row++) {
        for(let col = 0; col < n; col++) {
            max = Number.MIN_VALUE;
            max = Math.max(matrix[row][col], matrix[row][2 * n - col - 1], matrix[2 * n - row - 1][col], matrix[2 * n - row - 1][2 * n - col - 1]);
            // max = Math.max(matrix[row][2 * n - col - 1], max);
            // max = Math.max(matrix[2 * n - row - 1][col], max);
            // max = Math.max(matrix[2 * n - row - 1][2 * n - col - 1], max);

            total += max;
        }
    }
    return total;
}

let myMatrix = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
]

let result = flippingMatrix(myMatrix);

console.log(result);