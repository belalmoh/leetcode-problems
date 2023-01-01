const employeesFreetime = (intervals) => {
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

    let mergedTimes = [...merged, previous];
    let prev = mergedTimes.shift();

    let result = [];

    for(let interval of mergedTimes) {
        prev[0] = Math.min(prev[1], interval[0])
        prev[1] = Math.max(prev[1], interval[0]);

        result.push([...prev]);
        prev = interval;
    }

    return result;
}

const result = employeesFreetime([
    [1,3], [9,12], [2,4], [6,8]
]);
console.log(result);