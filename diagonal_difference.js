/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let size = arr.length - 1;

    let leftSum = 0;
    let rightSum = 0;

    for(var i = 0; i <= size; i++) {
        leftSum += arr[i][i]
        rightSum += arr[i][size-i]
    }

    return Math.abs(leftSum-rightSum);
}

let myMatrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

console.log(diagonalDifference(myMatrix));