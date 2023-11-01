// 8 Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию, которая вызывает каждую функцию в этом массиве и возвращает массив результатов, полученных после вызова каждой функции.cd

export function createFunctionArray(arrFunctions) {
  //Возвращаем новую функцию, которая вызывает функции в массиве фуннкций
  return function () {
    return arrFunctions.map((func) => func());
  };
}
