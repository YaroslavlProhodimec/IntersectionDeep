/**
  * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
  * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
  * @param {Object} firstObj - объект любых значений
  * @param {Object} secondObj - объект любых значений
  * @returns {Object}
*/

export const intersectionDeep = (firstObject, secondObject) => {
  throw new Error(`Напишите здесь свое решение ${firstObject}, ${secondObject}`);
};

const data = { a: 1, b: { c: 3 } };
const data2 = { c: 1, b: { c: 3 } };
console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }