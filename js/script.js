console.log('---------Пункт №4');
console.log('Функция - суммирование двух чисел');

function sum (a, b) {
    return a+b;
}
console.log(sum(5,11));


console.log('Функция - вычитание двух чисел');

function subtraction (a, b) {
    return a-b;
}
console.log(subtraction(15,5));

console.log('Функция - умножение двух чисел');

function multiplication (a, b) {
    return a*b;
}
console.log(multiplication(5,5));

console.log('Функция - деление двух чисел'); 

function division (a, b) {
    return a/b;
}
console.log(division(15,5));

console.log('---------Пункт №5');
console.log('Реализуйте функцию которая выводит в консоль числа от 1 до n.');

function increment (a) {
    for (let i = 1; i <= a; i++) {
        console.log(i);      
    }
}
increment (5);

console.log('---------Пункт №6');
console.log('Реализуйте функцию которая выводит числа от n до 1.');

function decrement (a) {
    for (let i = 1; i <= a; a--) {
        console.log(a); 
    }
}
decrement (5);

console.log('---------Пункт №7');
console.log('Реализуйте функцию возведения в степень pow. pow(x, n) -  x - значение, n - степень. ');

function pow (x, n) {
    return Math.pow(x,n);
}
console.log(pow(2,3));

console.log('---------Пункт №8');
console.log('Реализуйте функцию isBigger');

function isBigger (a, b) {
    return a > b;
}
console.log(isBigger(5,-1));

console.log('---------Пункт №9');
console.log('Реализуйте функцию isSmaller');

function isSmaller(a, b) {
    return a < b;
}
console.log(isSmaller(5,-1));