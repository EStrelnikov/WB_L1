// 18 Подсчитать максимальный объем данных, который можно записать в localStorage вашего браузера.

function testLocalStorageLimit() {
  let value = "v";

  // для более точной проверки очищяем все возможные данные в хранилище
  localStorage.clear();

  // запускаем бесконечный цикл, который остановится,
  // только если блок try catch вернет ошибку
  while (true) {
    try {
      localStorage.setItem("", value);
      // конкатенация строки, при каждой итерации цикла, длина строки фактически умножается на 2
      value += value;
    } catch {
      break;
    }
  }

  // функция возвращает длину строки, деленную на 2, чтобы учесть, что каждый символ хранится в формате UTF-16, который занимает 2 байта.
  // Затем результат умножается на 2, чтобы получить фактическую длину в байтах.
  return Math.floor((value.length / 2) * 2);
}

console.log(testLocalStorageLimit(), "байт"); // 8388608 байт
document.querySelector("span").innerText = `${testLocalStorageLimit()} байт`;

localStorage.clear();
