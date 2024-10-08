// ❓ Вы были в кемпинге со своими друзьями далеко от дома, но когда 
// приходит время возвращаться, вы понимаете, что ваше топливо на 
// исходе, а ближайшая заправка находится 50 в милях отсюда! Вы знаете, 
// что в среднем ваш автомобиль расходует около 25 миль на галлон. Осталось 2 галлонов.

// Учитывая эти факторы, напишите функцию, которая сообщает вам, 
// возможно ли добраться до пампа или нет.

// Функция должна возвращать, true если это возможно, и false если нет.


//  ✅ SOLUTION :

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump
  }
