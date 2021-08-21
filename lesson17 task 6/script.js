'use strict';

const today = new Date();
let newYear = new Date('31 december 2021').getTime();

// Получаем день недели
let day = today.getDay();
switch (day) {
    case 0: day = "Воскресенье";
        break;
    case 1: day = "Понедельник";
        break;
    case 2: day = "Вторник";
        break;
    case 3: day = "Среда";
        break;
    case 4: day = "Четверг";
        break;
    case 5: day = "Пятница";
        break;
    case 6: day = "Суббота";
        break;
}

//прибавляем 0 к однозначным цифрам
function twoNumbers(number) {
    if (number < 10)
        return (number = '0' + number);
    else return number;
}

//Получаем кол-во часов и время суток
let hours = today.getHours();
function hoursTime() {
    if (hours > 0 && hours <= 12) {
        return 'AM';
    }
    else if (hours >12 && hours <=24 ) return 'PM';
}
//Получаем время дня
function nowTime() {
    if (hours > 6 && hours <= 12) {
        return 'Доброе утро!';
    }
    else if (hours > 12 && hours <= 17) {
        return 'Добрый день!';
    }
    else if (hours > 17 && hours <= 23) {
        return 'Добрый вечер!';
    }
    else if (hours > 23 && hours <= 6) {
        return 'Доброй ночи!';
    }
}
//приводим часы в 12-часовой формат
function hoursToTwelve() {
    if (hours > 12 && hours <= 24) return (hours - 12);
    else return hours;
}
// получаем минуты и секунды
let minutes = today.getMinutes();
let seconds = today.getSeconds();

// Получаем кол-во дней до нового года
let daysLeft = Math.floor((newYear - today.getTime())/1000/60/60/24);


document.write(`${nowTime()} </br>
Сегодня: ${day} </br>
Текущее время: ${twoNumbers(hoursToTwelve())}:${twoNumbers(minutes)}:${twoNumbers(seconds)} ${hoursTime()} </br>
До нового года осталось ${daysLeft} дней`);

