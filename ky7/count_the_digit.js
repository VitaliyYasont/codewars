// ❓ Примите целое число n (n >= 0) и цифру d (0 <= d <= 9) как целое число.

// Возведите все числа в квадрат k (0 <= k <= n) от 0 до n.

// Подсчитайте количество цифр d используется при написании всех k**2.

// Реализуйте функцию, принимающую n и d в качестве параметров и возвращающую это количество.

// Примеры:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Обратите внимание, что 121 имеет двойную цифру 1.


// ✅ SOLUTION:

function nbDig(n, d) {
    
}