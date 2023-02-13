//Задание 4.
// Напишите функцию, которая принимает два числа.
// Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым.
// Используйте setInterval.

function intervalOutput (from,to) {
    let current = from;
    let intervalId = setInterval(function() {
            console.log(current);
            if (current == to) {
                clearInterval(intervalId);
            }
            current++;
        }, 1000);
}
intervalOutput (2,7);