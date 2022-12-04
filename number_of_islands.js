let visitIsland = (input, row, col) => {
    if(row < 0 || row >= input.length || col < 0 || col >= input.length) return;
    if(input[row][col] == 0) return;

    input[row][col] = 0;
    visitIsland(input, row, col-1);
    visitIsland(input, row, col+1);
    visitIsland(input, row-1, col);
    visitIsland(input, row+1, col);
}

let getNumberOfIslands = (input) => {
    let numberOfIslands = 0;
    for(let row = 0; row < input.length; row++) {
        for(let col = 0; col < input[row].length; col++) {
            if(input[row][col] === 1) {
                numberOfIslands++;
                visitIsland(input, row, col);
            }
        }
    }

    return numberOfIslands;
}


let sampleInput1 = [
    [1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0]
]

let result = getNumberOfIslands(sampleInput1);
console.log(result);