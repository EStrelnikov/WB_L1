// 11 Задача о замыканиях и области видимости: напишите функцию, которая возвращает другую функцию. Внутренняя функция должна иметь доступ к переменной, определенной во внешней функции, даже после того, как внешняя функция завершила свое выполнение.

export function parentFunction() {
  const outerNumber = 10; // Объявляем и инициализируем переменную
  console.log("parentFunction: outerNumber: ", outerNumber);
  return function (innerNumber = 13) {
    console.log("innerFunction: outerNumber: ", outerNumber);
    return outerNumber + innerNumber; // Возвращаем сумму outerNumber и innerNumber
  };
}
