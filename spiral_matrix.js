var spiralOrder = function(matrix) {
    let res = [];
	// In this problem, I'm using x to track the horizontal shifts, and y to track vertically, so the matrix[y][x] notation may seem a little weird
    let x = 0; // Left to right 
    let y = 0; // Top to bottom
    let length = matrix[0].length * matrix.length;
    for (let i = 0; i < length; i++) {
		// Add the current value to the result array
        res.push(matrix[y][x]);
		// Mark the position as visited
        matrix[y][x] = "$";
		// When going right, we want to check if we can visit the next node to the right, but can't go up
		// Every time we are heading right, we are either at the top of the matrix, or have already looped around the above elements
        if (canVisit(y, x + 1, matrix) && !canVisit(y - 1, x, matrix)) x++;
		// If we were heading right and can't go right anymore, we want to check if we can go down
        else if (!canVisit(y, x + 1, matrix) && canVisit(y + 1, x, matrix)) y++
		// If we were heading down and can't go down anymore, we want to check if we can go left
        else if (!canVisit(y + 1, x, matrix) && canVisit(y, x - 1, matrix)) x--;
		// If we were heading left and cant go left anymore, we want to check if we can go up
        else if (!canVisit(y, x - 1, matrix) && canVisit(y - 1, x, matrix)) y--;
    }
    return res;
};

const canVisit = (y, x, matrix) => {
	// If the position we are checking is out of bounds, we can't go there
    if (x < 0 || y < 0 ||  y >= matrix.length || x >= matrix[y].length) return false;
	// If the position is already visited, we don't want to go there again
    if (matrix[y][x] == "$") return false;
    else return true;
}

const input1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const input2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

const input3 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

const output = spiralOrder(input3);

console.log(output);

/**
 * @Variables rowPointer, colPointer
 * @Normally increment on colPointer by 1
 * @If colPointer === columns.size => rowPointer+1
 * @If colPointer === columns.size && rowPointer === rows.size => decrement colPointer by 1
 * @if colPointer === 0 && rowPointer === rows.size => decrement rowPointer by 1
 * 
 * @make_sure Need to check at each condition that the index was visited before or not
 */