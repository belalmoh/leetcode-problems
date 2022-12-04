const tripletSum = (inputNums) => {
    // need to sort it
    inputNums = inputNums.sort((a,b) => a-b);
    let resultSet = [];
    // equation => A + (b+c) = 0 -----------> (b,c) will be same as two sum problem
    // need to create a one pointer which will be our A then use two pointers one for b and c respectively

    for(var i = 0; i < inputNums.length; i++) {
        if(inputNums[i] > 0 && inputNums[i] == inputNums[i - 1]) continue;

        let leftPointer = i+1, rightPointer = inputNums.length -1;
        while(leftPointer < rightPointer) {
            let threeSum = inputNums[i] + inputNums[leftPointer] + inputNums[rightPointer];

            if(threeSum > 0 ) {
                rightPointer -= 1;
            } else if(threeSum < 0) {
                leftPointer += 1;
            } else {
                resultSet.push([inputNums[i], inputNums[leftPointer], inputNums[rightPointer]]);
                leftPointer += 1;
                while(inputNums[leftPointer] == inputNums[leftPointer -1] && leftPointer < rightPointer) {
                    leftPointer += 1;
                }
            }
        }
    }

    return resultSet;
}

const result = tripletSum([-3, 0, 1, 2, -1, 1, -2]);

console.log(result);