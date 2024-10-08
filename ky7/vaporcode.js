// ❓ Задача 4 недели ASC 1 (Среда №1)

// Напишите функцию, которая преобразует любое предложение 
// в текстовое предложение. в предложении A V A P O R W A 
// Ve все буквы переводятся в верхний регистр и добавляется 
// 2 пробела между каждой буквой (или специальным символом), 
// чтобы создать этот эффект V A P O R W A Ve.

// Обратите внимание, что в этом случае пробелы следует игнорировать.

// Примеры
// "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
// "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"


// ✅ SOLUTION: 

function vaporcode(string)  {
    return string
      .toUpperCase() // переводим в верхний регистр
      .replace(/\s+/g, '') // удаляем пробелы
      .split('') // разделяем на отдельные символы
      .join('  ') // добавляем 2 пробела между каждым символом
  }
  

