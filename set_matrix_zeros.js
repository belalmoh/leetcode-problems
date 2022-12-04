/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = (matrix) => {
    let output = JSON.parse(JSON.stringify(matrix));

    let transformZeros = (row, col) => {
        for(let x = 0; x < output.length; x++) {
            output[x][col] = 0;
        }
        output[row] = new Array(output[row].length).fill(0);
    };

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(!matrix[i][j]) transformZeros(i, j);
        }
    }

    return output;
};

// const input = [[1,1,1],[1,0,1],[1,1,1]];
// const input = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];

const output = setZeroes([[1,1,1],[1,0,1],[1,1,1]]);

console.log(output);