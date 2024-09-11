// ❓ Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, 
// как если бы все они были числами.
// Верните свой ответ в виде числа.

// ✅ SOLUTION:

// function sumMix(x) {
//     let sum = 0;
//     for (let i = 0; i < x.length; i++) {
//       let a = x[i];
//       sum = sum + (typeof a === 'string' ? Number(a) : a); // - тернарный
//     }
//     return sum;
//   }

function sumMix(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++){
        let num = x[i];
        let nums = Number(num);
        if (!isNaN(nums)) {
            sum = sum + nums;
        }
    }
    return sum;
}

