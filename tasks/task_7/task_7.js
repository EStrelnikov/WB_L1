// 7 Задача о коллекции функций: у вас есть массив функций, напишите код, который вызовет каждую функцию в этом массиве и выведет их порядковый номер. Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.
// Другими словами, нужно выполнить следующие шаги:
// a. Вызвать первую функцию из массива.
// b. После завершения работы первой функции вызвать вторую функцию.
// c. После завершения работы второй функции вызвать третью функцию.
// d. И так далее, пока все функции в массиве не будут вызваны по порядку.

export function sequentialCallFunctions(arr) {
  if (!arr.length) return null;
  // Цикл обходит все функции в массиве.
  for (let i = 0; i < arr.length; i++) {}
  arr.forEach(async (func, index) => {
    // Вывод сообщения о том, какую функцию функция собирается запустить.
    console.log(`Функция №${index + 1}`);
    // Вызов функции из массива. Оператор await означает, что код будет ждать завершения этой функции, прежде чем перейти к следующей.
    await func();
  });
}
