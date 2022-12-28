const minMeetingRooms = (intervals) => {
    intervals.sort(([aStart, aEnd], [bStart, bEnd]) =>
        aStart !== bStart ? aStart - bStart : aEnd - bEnd
    );

    let previous = intervals.shift();

    let num = 1;

    for(let current of intervals) {
        const [startPrevious, endPrevious] = previous;
        const [startCurrent, endCurrent] = current;

        if(startCurrent <= endPrevious) {
            num+=1;
            continue;
        }
        previous = current;
    }
    return num;
}

const result = minMeetingRooms([[1,4], [2,5], [7,9]]);
console.log(result);