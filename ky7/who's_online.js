// ❓ У вас есть приложение для группового чата, но кто онлайн!?
// Вы хотите показать своим пользователям, кто из их друзей 
// онлайн и доступен для общения!
// Получив на вход массив объектов, содержащий имена пользователей, 
// статус и время с момента последнего действия (в минутах), 
// создайте функцию для определения того, кто находится в Сети 
// online, offline и away.
// Если кто-то есть, online но его lastActivity не было более 
// 10 минут назад, он должен быть рассмотрен away.

// Входные данные имеют следующую структуру:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// Соответствующий результат должен выглядеть следующим образом:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// Если, например, пользователей нет online результат должен выглядеть следующим образом:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// имя пользователя всегда будет a string, статус всегда будет либо 'online', 
// либо 'offline' (перечисление UserStatus в C #), а LastActivity всегда будет number >= 0.

// Наконец, если у вас нет друзей в вашем приложении для чата, входными данными 
// будет пустой массив []. В этом случае вы должны вернуть пустой объект {} (пустой словарь в C #).

//  ✅ SOLUTION:

const whosOnline = (friends) => {
    const on = [];
    const off = [];
    const aw = [];
  
    for (let i = 0; i < friends.length; i++) {
      const el = friends[i];
      if (el.status === 'online') { 
        if (el.lastActivity <= 10) { 
          on.push(el.username);
        } else {
          aw.push(el.username)
        }
      } else {
        off.push(el.username)
      }
    }
  
    const itogo = {};
    if (on.length > 0) {
      itogo.online = on;
    }
    if (off.length > 0) {
      itogo.offline = off;
    }
    if (aw.length > 0) {
      itogo.away = aw;
    }
  
    return itogo
  }
  