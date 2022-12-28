const mergeIntervals = (intervals) => {
    intervals.sort(([aStart, aEnd], [bStart, bEnd]) =>
        aStart !== bStart ? aStart - bStart : aEnd - bEnd
    );
    let merged = [];
    if(intervals.length === 1) return intervals[0];

    let previous = intervals.shift();

    for(let current of intervals) {
        const [startPrevious, endPrevious] = previous;
        const [startCurrent, endCurrent] = current;

        if(startCurrent <= endPrevious) {
            previous[1] = Math.max(endCurrent, endPrevious);
            continue;
        }

        merged.push(previous);
        previous = current;
    }

    return [...merged, previous];
}

// console.log(mergeIntervals([[1,4], [2,5], [7,9]]));
// console.log(mergeIntervals([[1,4], [2,6], [3,5]]));
console.log(mergeIntervals([[6,7], [2,4], [5,9]]));