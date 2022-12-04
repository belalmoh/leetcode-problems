const permuteString = (word, pattern) => {

    let patternFreqMap = {};

    for(let char of pattern) {
        if(!patternFreqMap[char]) patternFreqMap[char] = 0;
        patternFreqMap[char] += 1;
    }

    let leftPointer = 0;
    let matchingCount = 0;
    let patternSize = Object.keys(patternFreqMap).length;
    let indexMatched = [];
    
    for(let rightPointer = 0; rightPointer <= word.length; rightPointer++) {

        for(let char of word.slice(leftPointer, rightPointer)) {
            if(patternFreqMap[char]) matchingCount +=1;
            if(matchingCount === patternSize) {
                indexMatched.push(leftPointer);
            }
        }

        if(((rightPointer - leftPointer) >= patternSize)) {
            leftPointer += 1;
        }

        matchingCount = 0;
    }
    return indexMatched;
}

console.log(permuteString("ppqp", "pq"));