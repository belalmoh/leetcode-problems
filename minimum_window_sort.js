const shortest_window_sort = (input) => {

    let leftPointer = input.indexOf(Math.min(...input));
    let rightPointer = input.length - 1;
    if(leftPointer > 0) {
        leftPointer = 0;
    } else {
        while(leftPointer < input.length) {
            if(input[leftPointer + 1] < input[leftPointer]) break;
            leftPointer ++;
        }
    }

    while(rightPointer > 0) {
        if(input[rightPointer - 1] > input[rightPointer]) break;
        rightPointer --;
    }

    if(leftPointer == input.length && rightPointer == 0) {
        return 0;
    }

    // return (rightPointer - leftPointer) + 1;
    return {leftPointer, rightPointer};
}

console.log(shortest_window_sort([1, 3, 2, 2, 2]));
