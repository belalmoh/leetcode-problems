let visitIsland = (input, row, col) => {
    
    if(row < 0 || row >= input.length || col < 0 || col >= input.length) return 0;
    if(input[row][col] == 0) return 0;

    input[row][col] = 0;
    let area = 1;

    area += visitIsland(input, row, col-1);
    area += visitIsland(input, row, col+1);
    area += visitIsland(input, row-1, col);
    area += visitIsland(input, row+1, col);

    return area;
}

let getNumberOfIslands = (input) => {
    let numberOfIslands = 0;
    let maxArea = 0;
    for(let row = 0; row < input.length; row++) {
        for(let col = 0; col < input[row].length; col++) {
            if(input[row][col] === 1) {
                numberOfIslands++;
                maxArea = Math.max(maxArea, visitIsland(input, row, col));
            }
        }
    }

    return maxArea;
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