// const intervals = [
//     {start: 0, end: 30},
//     {start: 5, end: 10},
//     {start: 15, end: 20}
// ];

const intervals = [
    {start: 5, end: 8},
    {start: 9, end: 15},
    {start: 13, end: 17},
];

const canAttendMeetings = (intervals) => {
    for(var i = 0; i < intervals.length -1; i++) {
        for(var j = 1; j < intervals.length; j++) {
            if(!(intervals[j].start > intervals[i].end)) {
                return false;
            }
        }
    }
    return true;
}

console.log(canAttendMeetings(intervals));