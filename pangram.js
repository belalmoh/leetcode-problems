let pangramWord = "We promptly judged antique ivory buckles for the next prize";
let noPangramWord = "We promptly judged antique ivory buckles for the prize";

let myRegex = /([a-z])(?!.*\1)/g;

function pangrams(s) {
    let myRegex = /([a-z])(?!.*\1)/g;
    let lettersCount = s.toLowerCase().match(myRegex).length;

    if(lettersCount == 26) {
        return 'pangram';
    }

    return 'not pangram';
}

console.log(pangrams(noPangramWord));