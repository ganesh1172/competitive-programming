//completed solution of problem

function gradingStudents(grades) {
    // Write your code here
    // if(grades>=38){
    //     var mod5 = grades % 5;
    //     if(mod5 >= 3)
    //     {
    //         grade = grades+5-mod5;
    //     }
    // }
    // return grades;
    return grades.map(function (grade) {
        return (grade >= 38 && grade % 5 >= 3) ? grade + 5 - (grade % 5) : grade;
    });
}