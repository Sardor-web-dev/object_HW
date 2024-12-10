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

console.log(total);



// Второе задание
// let students = [
//     {
//         name: "Ali",
//         age: 18,
//         grades: [90, 85, 85]
//     },    {
//         name: "Leyla",
//         age: 19,
//         grades: [80, 75, 85]
//     },    {
//         name: "Omar",
//         age: 20,
//         grades: [100, 95, 90]
//     }
// ];
 

// function calculateAverage(grades) {
//     let sum = grades.forEach((a, b) => a + b, 0);
//     return sum / grades.length;
// }


let students = [
    { name: "Ali", age: 18, grades: [90, 95, 85] },
    { name: "Leyla", age: 19, grades: [80, 75, 85] },
    { name: "Omar", age: 20, grades: [100, 95, 90] }
];

// Функция для расчета среднего балла
const average = grades => grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

// Находим студента с наивысшим средним баллом
const topStudent = students.reduce((top, student) => 
    average(student.grades) > average(top.grades) ? student : top
);

// Добавляем статус и выводим информацию 
students.forEach(student => {
    student.status = average(student.grades) >= 90 ? "Отличник" : "Хорошист";
    console.log(`Имя: ${student.name}, Статус: ${student.status}`);
});

console.log(`Студент с наивысшим средним баллом: ${topStudent.name}`);
