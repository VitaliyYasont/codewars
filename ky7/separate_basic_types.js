// ❓ Дано: последовательность значений разных типов (number, string, boolean). 
// Вы должны возвращать объект с отдельными свойствами для каждого из типов, 
// представленных во входных данных. Каждое свойство должно содержать массив 
// соответствующих значений.

// сохраняйте порядок значений, как во входном массиве
// если тип не представлен во входных данных, соответствующее свойство не 
// ожидается
// Итак, для этого ввода:

// ['a', 1, 2, false, 'b']
// ожидаемый результат:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

// ✅ SOLUTION:

function separateTypes(input) {
    const obj = {}
    
    let num = []
    let str = []
    let bul = []
    
    for (let i = 0; i < input.length; i++) {
        const a = input[i];
        if (typeof a === 'number') {
            num.push(a)
            obj.number=num
        } else if(typeof a === 'string') {
            str.push(a)
            obj.string=str
        } else {
            bul.push(a)
            obj.boolean=bul
        }
    }
        return obj
    }
    



// function separateTypes(input) {
//     const obj = {};
//     let num = [];
//     let str = [];
//     let bul = [];
  
//     for (let i = 0; i < input.length; i++) {
//       const a = input[i];
//       if (typeof a === 'number') {
//         num.push(a);
//       } else if (typeof a === 'string') {
//         str.push(a);
//       } else {
//         bul.push(a);
//       }
//     }
  
//     obj.number = num;
//     obj.string = str;
//     obj.boolean = bul;
  
//     console.log(obj);
//   }
  
//   separateTypes(['a', 1, 2, false, 'b']);
  
//   Найти еще