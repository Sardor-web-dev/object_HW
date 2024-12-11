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
