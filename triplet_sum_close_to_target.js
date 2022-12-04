const tripletSum = (inputNums, target) => {
    // need to sort it
    inputNums = inputNums.sort((a,b) => a-b);
    let smallest = Infinity;
    // equation => A + (b+c) = 0 -----------> (b,c) will be same as two sum problem
    // need to create a one pointer which will be our A then use two pointers one for b and c respectively

    for(var i = 0; i < inputNums.length; i++) {
        if(inputNums[i] > 0 && inputNums[i] == inputNums[i - 1]) continue;

        let leftPointer = i+1, rightPointer = inputNums.length -1;
        while(leftPointer < rightPointer) {
            let threeSum =  inputNums[i] + inputNums[leftPointer] + inputNums[rightPointer];
            if(target - threeSum === 0) return threeSum;
            
            if(threeSum > target) {
                rightPointer -= 1;
            } else {
                leftPointer += 1;
            }

            smallest = Math.min(Math.abs(smallest - target), Math.abs(target - threeSum));
            
        }
    }

    return smallest;
}

const result = tripletSum([-2, 0, 1, 2], 2);

console.log(result);