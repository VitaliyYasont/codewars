// ❓ Напишите функцию, которая принимает целое число N и строку S в качестве 
// параметров и возвращает строку из S , повторяющуюся ровно N раз.

// Примеры (ввод -> вывод)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// ✅ SOLUTION:

function repeatStr (n, s) {
    let stroka = ''; // создаемм нашу строку куда будем складывать наши слова
    for (let i = 0; i < n; i++) { // идем по нашемму массиву N раз
        stroka = stroka + s; // добавляем к нашей строке колличество слов столько раз сколько указано N
        if (n <= 0) { // на случай если N равна или меньше 0
            return '';
        }
    }
    return stroka
}