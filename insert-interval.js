const insertIntervals = (intervals, newInterval) => {
    intervals.push(newInterval);
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

// console.log(insertIntervals([[1,4], [2,5], [7,9]]));
// console.log(insertIntervals([[1,4], [2,6], [3,5]]));
console.log(insertIntervals([[1,3], [5,7], [8,12]], [4, 6]));