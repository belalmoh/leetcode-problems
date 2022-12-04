function gradingStudents(grades) {
    grades.forEach((grade, index, arr) => {
        const remainder = 5 - (grade % 5);
        const newGrade = grade + remainder;
        if(newGrade >= 40) {
            if(remainder > 0 && remainder < 3) {
                arr[index] = grade + remainder;
            }
        }
    });

    return grades;
}

let grades = gradingStudents([73, 67, 38, 33])

console.log(grades);