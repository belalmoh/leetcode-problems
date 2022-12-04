function marsExploration(s) {
    let regularSOS = new Array(s.length/3).fill("SOS").join("");
    let irregularCounts = 0;
    for(var i = 0; i < s.length; i++) {
        if(s[i] != regularSOS[i]){
            irregularCounts++
        }
    }
    return irregularCounts;
}

console.log(marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS"));
"SOSSPSSQSSOR"