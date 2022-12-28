const conflictingIntervals = (intervals) => {
    intervals.sort(([aStart, aEnd], [bStart, bEnd]) =>
        aStart !== bStart ? aStart - bStart : aEnd - bEnd
    );

    let previous = intervals.shift();

    for(let current of intervals) {
        const [startPrevious, endPrevious] = previous;
        const [startCurrent, endCurrent] = current;

        if(startCurrent <= endPrevious) {
            return false;
        }
    }
    return true;
}

const result = conflictingIntervals([[6,7], [2,4], [8,12]]);
console.log(result);