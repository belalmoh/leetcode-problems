const getNextIndex = (array, index, isForward) => {
    let direction = array[index] >=0;
    if(direction !== isForward) return -1;

    let nextIndex = (array[index] + index) % array.length;

    if(nextIndex < 0) nextIndex = nextIndex + array.length;

    if(nextIndex == index) return -1;

    return nextIndex;
}

const cycleInArray = (array) => {
    let length = array.length;
    if(length <= 0) return false;

    for(let i = 0; i < length; i++) {
        let slow, fast;
        slow = fast = i;
        let isForward = array[i] > 0 ? true : false;

        while(true) {
            slow = getNextIndex(array, slow, isForward);
            if(slow === -1) break;

            fast = getNextIndex(array, fast, isForward);
            if(fast === -1) break;

            fast = getNextIndex(array, fast, isForward);
            if(fast === -1) break;

            if(slow === fast) return true;
        }
    }
    return false;
}

// console.log(cycleInArray([1, 2, -1, 2, 2]));
console.log(cycleInArray([2, 2, -1, 2]));
// console.log(cycleInArray([2, 1, -1, -2]));