const missingNumbers = (input) => {
    let result = [];
    for(let i = 0; i < input.length; i++) {
        if(input.indexOf(i+1) == -1) {
            result.push(i+1);
        }
    }
    return result;
}

const result = missingNumbers([2,3,2,1]);
console.log(result);