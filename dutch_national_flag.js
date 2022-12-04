const dutchFlagSort = (input) => {

    let low = 0, high = input.length-1;
    let i = 0;
    while(i <= high) {
        if(input[i] == 0) {
            [input[i], input[low]] = [input[low], input[i]];
            low += 1;
        } else if(input[i] == 2) {
            [input[i], input[high]] = [input[high], input[i]];
            high -= 1;
        } else {
            i++;
        }
    }

    return input;
}

let arr = [1, 0, 2, 1, 0];
dutchFlagSort(arr);
console.log(arr);