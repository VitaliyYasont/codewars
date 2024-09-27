// ❓ Трехъязычная демократия
// В Швейцарии четыре официальных языка: немецкий, французский, 
// итальянский и ретороманский.1

// Когда встречаются носители одного или нескольких из этих 
// языков, они следуют определенным правилам правила при выборе 
// языка для группы.2 Вот правила для групп, состоящих ровно из 
// трех человек3 Люди:4

// Когда все трое являются носителями одного языка, он также 
// становится языком их группы.5a

// Когда двое говорят на одном языке, но третий говорит на 
// другом, все трое будут общаться на языке меньшинства.5b

// Когда встречаются носители трех разных языков, они избегают 
// этих трех языков и вместо этого используют оставшийся из четырех официальных языков.5c

// Языки кодируются буквами D для Deutsch, F для Français, 
// I для Italiano, и K для Rumantsch.6

// Ваша задача - написать функцию, которая принимает список 
// из трех языков и возвращает язык, который должна использовать группа.7 8

// Примеры:9

// Языком для группы из трех носителей французского языка является французский: FFF → F

// Группа из двух носителей итальянского языка и ретороманца 
// разговаривает на ретороманском: IIK → K

// Когда встречаются три человека, родными языками которых 
// являются немецкий, французский и ретороманский, языком группы становится итальянский: DFK → I

// ✅ SOLUTION: 

function trilingualDemocracy(group) {
    let languages = ['D', 'F', 'I', 'K']; // официальные языки
    let uniqueLanguages = [...new Set(group)]; // получить уникальные языки в группе
  
    if (uniqueLanguages.length === 1) { // все три человека говорят на одном языке
      return group[0];
    } else if (uniqueLanguages.length === 2) { // двое говорят на одном языке
      for (let i = 0; i < group.length; i++) {
        if (group[i] !== uniqueLanguages[0]) {
          return group[i];
        }
      }
    } else { // все три человека говорят на разных языках
      for (let i = 0; i < languages.length; i++) {
        if (!group.includes(languages[i])) {
          return languages[i];
        }
      }
    }
  }





// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set
// function trilingualDemocracy(group) {
//     let result = ''
      
//     let language = ['D', 'F', 'I', 'K']
//     for (let i= 0; i < group.length;) {
      

//         if (group[i] === group[i+1] && group[i] === group[i+2]) {
//             return group[i]
//         } else if (group[i] === group[i+1] && group[i] !== group[i+2]) {
//             return group[i+2]
//         }else if (group[i] !== group[i+1] && group[i] === group[i+2]) {
//             return group[i+1]
//         }else if (group[i] !== group[i+1] && group[i] !== group[i+2]) {
//             return group[i]
//         } else if (group[i] !== group[i+1] && group[i] !== group[i+2] && group[i+1] !== group[i+2]) {
//             break

        
//     }
   
//     }
//      return 'D'
// }

// trilingualDemocracy([])
// console.log(trilingualDemocracy(['r','t','w']));

// function trilingualDemocracy(group) {
//     let language = ['D', 'F', 'I', 'K'];
//     for (let i = 0; i < group.length; i++) {
//       if (group[i] === group[i+1] && group[i] === group[i+2]) {
//         return group[i];
//       } else if (group[i] === group[i+1] && group[i] !== group[i+2]) {
//         return group[i+2];
//       } else if (group[i] !== group[i+1] && group[i] === group[i+2]) {
//         return group[i+1];
//       } else if (group[i] !== group[i+1] && group[i] !== group[i+2]) {
//         return group[i];
//       }
//     }
//     // если все значения не равны между собой, вернуть 'D'
//     return 'D';
//   }

//   trilingualDemocracy([])
// console.log(trilingualDemocracy(['ш','t','w']));
  


function trilingualDemocracy(group) {
    let languages = ['D', 'F', 'I', 'K']; // официальные языки
    let uniqueLanguages = [...new Set(group)]; // получить уникальные языки в группе
  
    if (uniqueLanguages.length === 1) { // все три человека говорят на одном языке
      return group[0];
    } else if (uniqueLanguages.length === 2) { // двое говорят на одном языке
      for (let i = 0; i < group.length; i++) {
        if (group[i] !== uniqueLanguages[0]) {
          return group[i];
        }
    }
      } else if (uniqueLanguages.length === 2) {
        for (let i = 0; i < group.length; i++) {if (group[i] !== uniqueLanguages[1]) {
          return group[i];
        }  
    } else { // все три человека говорят на разных языках
      for (let i = 0; i < languages.length; i++) {
        if (!group.includes(languages[i])) {
          return languages[i];
        }
      }
    }
  }
}
} else if (uniqueLanguages.length === 2) { // двое говорят на одном языке
    for (let i = 0; i < group.length; i++) {
      if (group.filter(lang => lang === group[i]).length === 1) {
        return group[i]; // возвращает язык меньшинства