const tripletSum = (inputNums, target) => {
    // need to sort it
    inputNums = inputNums.sort((a,b) => a-b);
    let count = 0;
    // equation => A + (b+c) = 0 -----------> (b,c) will be same as two sum problem
    // need to create a one pointer which will be our A then use two pointers one for b and c respectively

    for(var i = 0; i < inputNums.length; i++) {
        // if(i > 0 && inputNums[i] == inputNums[i - 1]) continue;

        let leftPointer = i+1, rightPointer = inputNums.length -1;
        while(leftPointer < rightPointer) {
            let threeSum = inputNums[i] + inputNums[leftPointer] + inputNums[rightPointer];

            if(threeSum >= target) {
                rightPointer -= 1;
            } else if(threeSum < target) {

                count += (rightPointer - leftPointer);
                leftPointer += 1;
            }
        }
    }

    return count;
}

const result = tripletSum([-1, 4, 2, 1, 3], 5);

console.log(result);