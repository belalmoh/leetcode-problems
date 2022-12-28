const eraseOverlapIntervals = (intervals) => {
    let count = 0;
    intervals.sort((a,b) => a[1] - b[1]);

    let prev = intervals[0];

    for(var i = 1; i < intervals.length; i++) {
        if(prev[1] <= intervals[i][0]) prev = intervals[i];
        else count++;
    }
    return count;
}

console.log(eraseOverlapIntervals([[0,1],[3,4],[1,2]]));