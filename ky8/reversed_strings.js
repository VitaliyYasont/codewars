// ❓ Завершите решение так, чтобы оно обращало переданную в него строку вспять.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// ✅ SOLUTION:

function solution(str){
  let stroka = '' // новая переменная нашей строки которую ххотим получить
  for (let i = str.length - 1; i >= 0; i--) { // обычный перебор символов нашего массива но с конца(первый элемент будет последним, и по убыванию)
    stroka = stroka + str[i]; // собираем строку в обратном порядке, т.к. у нас не цифры и числа а буквы
}
return stroka
}
console.log(doubleEachCharacter('pes ebaniy'));
