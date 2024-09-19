// ❓ Напишите функцию с именем setAlarm/set_alarm/set-alarm/setalarm 
// (в зависимости от языка), которая получает два параметра. Первый 
// параметр, employed, является действительным всякий раз, когда вы 
// работаете, а второй параметр, vacation является действительным 
// всякий раз, когда вы находитесь в отпуске.

// Функция должна возвращать true, если вы работаете, а не в 
// отпуске (потому что именно при таких обстоятельствах вам 
//     необходимо установить будильник). В противном случае 
//     она должна возвращать false . Примеры:

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false


// ✅ SOLUTION:

function setAlarm(employed, vacation){
    if(employed && vacation === false){
        return true
    }else {
        return false
    }
    }
    
    // function setAlarm(employed, vacation){
    // return employed && vacation === false 
    // }   тернарный оператор