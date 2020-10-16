'use strict';

// Проверка на число
let isNumber = function(n) {
    return !isNaN(parseFloat(n) && isFinite(n));
};

// Генератор чисел от 1 до 100;
const getRandomIntInclusive = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Игра
const game = function () {

    let randomNumber = getRandomIntInclusive(1, 100);
    console.log(randomNumber);

    let repeat = function() {
      let userNumber = prompt ('Угадай число от 1 до 100');
        if (isNumber(userNumber)) {
          if (userNumber === randomNumber) {
            alert('Поздравляю, Вы угадали!!!');
          } else if (userNumber > randomNumber) {
            alert('Загаданное число меньше');
            repeat();
          } else if (userNumber < randomNumber) {
            alert('Загаданное число больше');
            repeat();
          }
        } else if ()
    };
    return repeat();
};

game();