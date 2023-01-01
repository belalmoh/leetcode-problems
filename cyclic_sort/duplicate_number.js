const duplicateNumber = (input) => {
    for(let i = 0; i < input.length; i++) {
        let number = input[i];
        if(number != i - 1) {
            let extra = input[number - 1];
            input[number - 1] = number;
            input[i] = extra;
        } else {
            return number;
        }
    }
    return input;
}

const result = duplicateNumber([2, 6, 4, 3, 1, 5]);
console.log(result);