const subjects = ['html', 'css', 'js'];
const grades = [[], [], []]; // Array para almacenar las notas

// Pedir las notas
subjects.forEach((subject, index) => {
    for (let i = 1; i <= 3; i++) {
        let grade = prompt(`Ingrese la nota ${i} de ${subject}`);
        grades[index].push(parseFloat(grade));
    }
});

// Mostrar las notas en el documento
grades.forEach((subjectGrades, subjectIndex) => {
    subjectGrades.forEach((grade, gradeIndex) => {
        document.getElementById(`${subjects[subjectIndex]}${gradeIndex + 1}`).innerHTML = grade;
    });
});

// Calcular y mostrar promedios
subjects.forEach((subject, index) => {
    const average = grades[index].reduce((a, b) => a + b, 0) / grades[index].length;
    document.getElementById(`promedio${subject.toUpperCase()}`).innerHTML = average.toFixed(2);
});
