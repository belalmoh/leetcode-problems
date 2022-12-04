const backspace_compare = (str1 = '', str2 = '') => {

    const backspaceString = (str) => {
        let result = [];
    
        for(var i = 0; i < str.length; i++) {
            if(str[i] === '#'){
                result.pop();
            } else {
                result.push(str[i]);
            }
        }
        return result.join("");
    }

    return backspaceString(str1) == backspaceString(str2);
}

console.log(backspace_compare("xy#z", "xzz#"))
// console.log(backspaceString('xy#z'));
// console.log(backspaceString('xzz#'));