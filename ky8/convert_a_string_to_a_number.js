// ❓ Примечание: Это ката вдохновлено Преобразованием числа в строку!. 
// Попробуйте и это.

// Описание
// Нам нужна функция, которая может преобразовывать строку в 
// число. Какие способы достижения этого вы знаете?

// Примечание: Не волнуйтесь, все входные данные будут строками, 
// и каждая строка является абсолютно корректным представлением 
// целого числа.

// Примеры
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405


// ✅ SOLUTION:

const stringToNumber = function(str){
    str = Number(str)
    
    return str;
  }