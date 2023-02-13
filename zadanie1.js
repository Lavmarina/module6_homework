//Задание 1.
//В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
//При выполнении задания необходимо учесть, что массив может содержать не только числа,
// но и, например, знаки, null и так далее.
//На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное
//название, вызовите функцию, проанализируйте синтаксис.

let someArr = [2, 0, 3, "mojito", 4, null];

let anotherArr = [2,7,9,"blood mary", 10,12,0, NaN];

function analyzeArray (arr) {
    let arr2 = [];
    arr.forEach(function (elem) {
        if (typeof elem == "number" && isNaN(elem)!== true ) arr2.push(elem);
    });

    let even = arr2.filter(function (elem) {
        return elem % 2 == 0;
    });
    let odd = arr2.filter(function (elem) {
        return elem % 2 !== 0;
    });
    let zero = arr2.filter(function (elem) {
        return elem * 1 == 0;
    });
    console.log(`Количество четных чисел ${even.length}, количество нечетных чисел ${odd.length}, 
количество нулевых элементов ${zero.length}`);
}
analyzeArray(anotherArr);
analyzeArray(someArr); 