// ❓ Напишите функцию, которая добавляет именованное свойство к объекту. 
// Должна быть возможность присвоить свойству новое значение. 
// Если свойство уже существует у объекта, должно быть выдано сообщение об ошибке.

// ✅ SOLUTION:

function addProperty(obj, prop, value) {
    if(prop in obj && obj[prop] !== undefined) { // Теперь при вызове функции addProperty будет проверяться наличие свойства в объекте и его значение, и исключение будет выброшено только если свойство уже существует и имеет значение, отличное от undefined.
      throw new Error('Error message')
    } else {
      obj[prop] = value
    }
  }
