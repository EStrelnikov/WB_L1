// 9 Реализовать функцию конвертации JSON в строку

export function customStringify(obj) {
  // Проверяем тип значения и обрабатываем его соответствующим образом
  if (typeof obj === "function" || obj === undefined) {
    // Если значение является функцией или undefined, возвращаем undefined
    // (аналогично JSON.stringify, которая пропускает функции и undefined)
    return undefined;
  }
  // Проверяем, является ли объектом (не null)
  if (typeof obj === "object" && obj !== null) {
    // Если массив, обрабатываем каждый элемент
    if (Array.isArray(obj)) {
      return `[${obj.map((item) => customStringify(item)).join(",")}]`;
    } else {
      // Если объект, обрабатываем каждое свойство
      return `{${Object.entries(obj)
        .map(
          ([key, value]) => `${customStringify(key)}:${customStringify(value)}`
        )
        .join(",")}}`;
    }
  } else if (typeof obj === "string") {
    // Обрабатываем строки
    return `"${obj}"`;
  } else {
    // Возвращаем строковое представление для примитивных значений (числа, булевы, null)
    return String(obj);
  }
}
