const missingNumber = (input) => {
    for(let i = 0; i < input.length; i++) {
        if(input.indexOf(i+1) == -1) {
            return i+1;
        }
    }
    return input;
}

const result = missingNumber([8, 3, 5, 2, 4, 6, 0, 1]);
console.log(result);