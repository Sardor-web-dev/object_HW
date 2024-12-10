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
function calculateAverage(grades) {
    let sum = grades.reduce((a, b) => a + b, 0);
    return sum / grades.length;
}

// Находим студента с наивысшим средним баллом
let topStudent = students.reduce((prev, current) => {
    return (calculateAverage(prev.grades) > calculateAverage(current.grades)) ? prev : current;
});

// Добавляем новое поле status для каждого студента
students = students.map(student => {
    return {
        ...student,
        status: calculateAverage(student.grades) >= 90 ? "Отличник" : "Хорошист"
    };
});
students.
// Выводим список всех студентов с их статусом
students.forEach(student => {
    console.log(`Имя: ${student.name}, Возраст: ${student.age}, Средний балл: ${calculateAverage(student.grades).toFixed(2)}, Статус: ${student.status}`);
});
