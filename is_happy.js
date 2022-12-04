 /**
 * Done in ~5 minutes while in a good mood and relieved spirit with no pressure
 */

/**
 * 
 * @param {Number} n 
 * @param {Number[]} numStack @optional
 * @returns Boolean
 */

const isHappy = (n, numStack = []) => {
    if(n === 1) {
        return true
    } else if(numStack.indexOf(n) === -1) {
        numStack.push(n);
        const separatedNumber = String(n).split('').map((num) => Math.pow(Number(num), 2));
        const totalSum = separatedNumber.reduce((prev, current) => prev+current)
        return isHappy(totalSum, numStack);
    }
    return false;
}

console.log(isHappy(2));