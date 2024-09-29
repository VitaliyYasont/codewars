// ❓ Рассмотрим массив / список овец, в котором некоторые овцы 
// могут отсутствовать на своем месте. Нам нужна функция, 
// которая подсчитывает количество овец, присутствующих в 
// массиве (true означает присутствует).

// Например,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// Правильный ответ был бы 17.

// Подсказка: не забудьте проверить наличие неверных значений, таких как null/undefined

// ✅ SOLUTION:

function countSheeps(sheep) {
    let count = 0
    for (let i = 0; i < sheep.length; i++) {
        const el = sheep[i];
        if (sheep[i] === true) {
            count++
        }
    }
    return count
  }
 