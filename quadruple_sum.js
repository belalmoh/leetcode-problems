const tripletSum = (inputNums, target) => {
    // need to sort it
    inputNums = inputNums.sort((a,b) => a-b);
    let resultSet = [];
    // equation => A + (b+c) = 0 -----------> (b,c) will be same as two sum problem
    // need to create a one pointer which will be our A then use two pointers one for b and c respectively
    for(var k = 0; k < inputNums.length; k++) {
        for(var i = k+1; i < inputNums.length; i++) {
            if(inputNums[k] > 0 && inputNums[i] > 1 && inputNums[i] == inputNums[k]) continue;
    
            let leftPointer = i+1, rightPointer = inputNums.length -1;
            while(leftPointer < rightPointer) {
                let threeSum = inputNums[k] + inputNums[i] + inputNums[leftPointer] + inputNums[rightPointer];
    
                if(threeSum > target) {
                    rightPointer -= 1;
                } else if(threeSum < target) {
                    leftPointer += 1;
                } else if (threeSum === target) {
                    resultSet.push([inputNums[k], inputNums[i], inputNums[leftPointer], inputNums[rightPointer]]);
                    leftPointer += 1;
                    while(inputNums[leftPointer] == inputNums[leftPointer -1] && leftPointer < rightPointer) {
                        leftPointer += 1;
                    }
                }
            }
        }
    }

    return resultSet;
}

const result = tripletSum([2, 0, -1, 1, -2, 2], 2);

console.log(result);