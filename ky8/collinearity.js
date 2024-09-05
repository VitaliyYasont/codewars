// ❗❗❗ Теоретический материал
// Вам даны два вектора, начинающихся с начала координат (x=0, y=0) с координатами (x1,y1) и (x2,y2).
// Ваша задача - выяснить, являются ли эти векторы коллинеарными. Коллинеарные векторы - это векторы, 
// лежащие на одной прямой. Они могут быть направлены в одну и ту же или противоположные стороны. 
// Один вектор можно получить из другого, умножив его на определенное число. В терминах координат 
// векторы (x1, y1) и (x2, y2) коллинеарны, если (x1, y1) = (k*x2, k*y2) , где k - любое число, 
// действующее как коэффициент.

// Примечания
// Все векторы начинаются с начала координат (x=0, y=0).
// Будьте осторожны при обработке случаев, когда x1, x2, y1 или y2 равны нулю, чтобы избежать ошибок деления на ноль.
// Вектор с координатами (0, 0) коллинеарен всем векторам.
// Векторы (x1, y1) и (x2, y2) коллинеарны, если выполняется условие:(x1*y2 === x2*y1)
// Примеры
// (1,1,1,1) ➞ true
// (1,2,2,4) ➞ true
// (1,1,6,1) ➞ false
// (1,2,-1,-2) ➞ true
// (1,2,1,-2) ➞ false
// (4,0,11,0) ➞ true
// (0,1,6,0) ➞ false
// (4,4,0,4) ➞ false
// (0,0,0,0) ➞ true
// (0,0,1,0) ➞ true
// (5,7,0,0) ➞ true




// ❓ Описание проблемы
// Напишите функцию collinearity(x1, y1, x2, y2), которая возвращает логический тип в зависимости от того, 
// являются ли векторы коллинеарными или нет.

// all coordinates are integers
// -1000 <= any coordinate <= 1000


// ✅ SOLUTION: 

function collinearity(x1, y1, x2, y2) {
    if ((x1 === 0 && y1 === 0) || (x2 === 0 && y2 === 0)) { // если один из векторов - (0, 0)
      return true;
    }
    
    return x1 * y2 === x2 * y1; // коллинеарно или нет
  }

console.log(collinearity(5, 2, 10, 4))