// ❓ Я новичок в программировании, и теперь я хочу получить сумму двух массивов... 
// Фактически сумму всех их элементов. Я буду признателен за вашу помощь.

// P.S. Каждый массив содержит только целые числа. Выходные данные тоже являются числами.

// ✅ SOLUTION:


function arrayPlusArray(arr1, arr2) {
    let sum = 0
    for (let i = 0; i < arr1.length; i++) {
        sum = sum + arr1[i]
    }

    for (let a = 0; a < arr2.length; a++) {
        sum = sum + arr2[a]
    }

    return sum; //something went wrong
}

