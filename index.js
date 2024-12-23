// Первое задание

let arr = [
    [{a: {price: 20}}],
    [{a: {price: 35}}],
    [{a: {price: 44}}]
]

let first = arr[0][0].a.price

let second = arr[1][0].a.price

let third = arr[2][0].a.price

let total = 0

total = first + second + third



const average = grades => grades.reduce((sum, grade) => sum + grade, 0) / grades.length;


const topStudent = students.reduce((top, student) => 
    average(student.grades) > average(top.grades) ? student : top
);


students.forEach(student => {
    student.status = average(student.grades) >= 90 ? "Отличник" : "Хорошист";
    console.log(`Имя: ${student.name}, Статус: ${student.status}`);
});

console.log("Студент с наивысшим средним баллом:", topStudent.name);
