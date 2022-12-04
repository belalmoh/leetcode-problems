let visitIsland = (input, row, col, direction) => {
    if(row < 0 || row >= input.length || col < 0 || col >= input.length) return '';
    if(input[row][col] == 0) return '';

    input[row][col] = 0;
    let traversingString = direction;
    
    traversingString += visitIsland(input, row, col-1, "L");
    traversingString += visitIsland(input, row, col+1, "R");
    traversingString += visitIsland(input, row-1, col, "U");
    traversingString += visitIsland(input, row+1, col, "D");

    return traversingString;
}

let getNumberOfIslands = (input) => {
    let numberOfIslands = 0;
    let identicalIslandsMap = new Set();
    for(let row = 0; row < input.length; row++) {
        for(let col = 0; col < input[row].length; col++) {
            if(input[row][col] === 1) {
                numberOfIslands++;
                let traversal = visitIsland(input, row, col, "O");
                identicalIslandsMap.add(traversal);
            }
        }
    }

    return identicalIslandsMap.size;
}


let sampleInput1 = [
    [1, 1, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 0]
]

let result = getNumberOfIslands(sampleInput1);
console.log(result);