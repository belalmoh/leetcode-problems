const rotate = (matrix) => {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = matrix[i].length - 1; j >= 0; j--) {
            let max = Math.max(i, j);
            let min = Math.min(i, j);

            let temp = matrix[i][j];
            matrix[i][j] = matrix[max][min];
            matrix[max][min] = temp;
        }
        matrix[i] = matrix[i].reverse();
    }

    return matrix;
};

const input1 = [
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"],
];

const input2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const input3 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]

const result = rotate(input3);

console.log({ result });

// target output
/**
*   ["2,0", "1,1", "0,0"],
    ["2,1", "1,1", "0,1"],
    ["2,2", "1,2", "0,2"],
 */