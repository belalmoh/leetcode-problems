let numbers = "1 1 3 2 1".split(" ");

function countingSort(arr) {
    const result = new Array(100).fill(0)
    arr.forEach((number) => {
        result[number] ++
    })
    return result
}

const result = countingSort(numbers);
console.log(result);