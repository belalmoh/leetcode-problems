const duplicateNumber = (input) => {
    
    let sorted = input.sort((a,b) => a-b);
    let duplicates = [];

    for(let i = 0; i < sorted.length; i++) {
        if(sorted[i] == sorted[i+1] && i < sorted.length) {
            duplicates.push(sorted[i]);
        }
    }

    return duplicates;
}

const result = duplicateNumber([3, 4, 4, 5, 5]);
console.log(result); 