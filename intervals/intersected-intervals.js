const intersectedIntervals = (intervals, intersected) => {
    intervals.sort(([aStart, aEnd], [bStart, bEnd]) =>
        aStart !== bStart ? aStart - bStart : aEnd - bEnd
    );

    intersected.sort(([aStart, aEnd], [bStart, bEnd]) =>
        aStart !== bStart ? aStart - bStart : aEnd - bEnd
    );

    let intersectedRes = [];
    if(intervals.length === 1) return intervals[0];

    for(let currentIntersected of intersected) {
        for(let current of intervals) {
            const [startIntersected, endIntersected] = currentIntersected;
            const [startInterval, endInterval] = current;
    
            if((startIntersected >= startInterval && startIntersected <= endInterval) || (startInterval >= startIntersected && endIntersected >= startInterval)) {
                // current[0] = Math.max(startInterval, startIntersected)
                // current[1] = Math.min(endInterval, endIntersected);
                intersectedRes.push([
                    Math.max(startInterval, startIntersected),
                    Math.min(endInterval, endIntersected)
                ]);
            }
    
        }
    }

    return [...intersectedRes];
}

// console.log(intersectedIntervals([[1,4], [2,5], [7,9]]));
// console.log(intersectedIntervals([[1,4], [2,6], [3,5]]));
let result = intersectedIntervals([[1, 3], [5, 7], [9, 12]], [[5, 10]]);
// let result = intersectedIntervals([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]]);
console.log(result);