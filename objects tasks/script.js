// Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
//   * Ожидаемый результат: ({}) => true,
//       ({ a: undefined }) => true,
//       ({ a: 1 }) => false
//   * Пустые значения: '', null, NaN, undefined
//   * Сложность задачи: 2 of 5
//   * @param {Object} object - объект с примитивами
//   * @returns {boolean}
// */

function checkIfEmpty(obj){
    let values = Object.values(obj)
    return obj == {} ? true : values.every(value => value === '' || value === undefined || value === null || value === NaN)
}



// * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
// * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
// * @param {Object} firstObj - Объект с любыми значениями
// * @param {Object} secondObj - Объект с любыми значениями
// * @returns {boolean}
// */
// export const isEqualDeep = (element) => {
// throw new Error(`Напишите здесь свое решение ${element}`);
// };
// const data = { a: 1, b: { c: 1 } };
// const data2 = { a: 1, b: { c: 1 } };
// const data3 = { a: 1, b: { c: 2 } };
// console.log(isEqualDeep(data, data2)); // true
// console.log(isEqualDeep(data, data3)); // false\

function isEqualDeep(obj, obj2){
    return JSON.stringify(obj) == JSON.stringify(obj2) ? true : false
}

// * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
// * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
// * @param {Object<string | number>} firstObj - объект с примитивными значениями
// * @param {Object<string | number>} secondObj - объект с примитивными значениями
// * @returns {Object}
// */


function intersection(firstObject, secondObject) {
    let firstObjKeys = Object.keys(firstObject);

  return firstObjKeys.reduce((res = {}, key) => {
    if (firstObject[key] === secondObject[key]) {
      res = {
        ...res,
        [key]: firstObject[key],
      };
    }
    return res;
  }, {});
   
}
  const data = { a: 1, b: 2 };
  const data2 = { c: 1, b: 2 };
  console.log(intersection(data, data2)); // { b: 2 }