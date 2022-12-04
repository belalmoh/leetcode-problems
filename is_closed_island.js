let visitIsland = (input, row, col) => {
    
    if(row < 0 || row >= input.length || col < 0 || col >= input.length) return false;
    if(input[row][col] == 0) return true;

    input[row][col] = 0;
    let isClosed = true;

    isClosed &= visitIsland(input, row, col-1);
    isClosed &= visitIsland(input, row, col+1);
    isClosed &= visitIsland(input, row-1, col);
    isClosed &= visitIsland(input, row+1, col);

    return isClosed;
}

let getNumberOfIslands = (input) => {
    let numberOfIslands = 0;
    for(let row = 0; row < input.length; row++) {
        for(let col = 0; col < input[row].length; col++) {
            if(input[row][col] === 1) {
                let isClosed = visitIsland(input, row, col);
                if(isClosed) numberOfIslands++;
            }
        }
    }

    return numberOfIslands;
}


let sampleInput1 = [
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0]
]

let result = getNumberOfIslands(sampleInput1);
console.log(result);