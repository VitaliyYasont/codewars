// ❓ Создайте боевую функцию, которая забирает текущее здоровье игрока и количество получаемого урона, а
//  также возвращает игроку новое здоровье. Здоровье не может быть меньше 0.


// ✅ SOLUTION :

function combat(health, damage) {
    let newHealth = health - damage
   if(newHealth < 0) {
    newHealth = 0
   }
   return newHealth
  }


//   function combat(health, damage) {
//     return Math.max(0, health - damage);
// }