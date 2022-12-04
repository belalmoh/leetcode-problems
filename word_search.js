const exist = (board, word) => {
    function* generatorFunction() {
        for(var i = 0; i < word.length; i++) {
            yield word[i];
        }
    }

    let generatorObject = generatorFunction();
    let currentChar = generatorObject.next().value;
    board.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            if(col === currentChar) {
                let neighbors = getNeighbors(board, rowIndex, colIndex);
                console.log({col, neighbors});
                currentChar = generatorObject.next().value;
            }
        })
    })
};

const getNeighbors = (board, rowIndex, colIndex) => {
    if(colIndex === 0) colIndex = 0;
    let left = board[rowIndex][colIndex - 1] ?? false;
    let right = board[rowIndex][colIndex + 1] ?? false;
    let top = board[rowIndex + 1][colIndex] ?? false;
    let bottom = board[rowIndex - 1][colIndex] ?? false;

    return {
        left, right, top, bottom
    };
};

const board1 = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
const word1 = "ABCCED";

exist(board1, word1);