// 10 Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.

// функция не содержит всех возможных проверок на типы данных и взаимодействия с ними, постарался охватить самые часто встречающиеся типы даных

export function customParse(str) {
  let index = 0;

  function parseValue() {
    skipWhitespace();
    //Если символом является открвающеяся кавычка, то переходим к парсингу строки
    if (str[index] === '"') return parseString();
    //Если символом является открвающеяся фигурная скобка, то переходим к парсингу объекта
    if (str[index] === "{") return parseObject();
    //Если символом является открвающеяся квадартная скобка, то переходим к парсингу массива
    if (str[index] === "[") return parseArray();
    // Если проходит тест на число, то парсим число
    if (/^-?\d/.test(str[index])) return parseNumber();
    // Если это булевое значение, то парсим булевое значение
    if (str.substr(index, 4) === "true" || str.substr(index, 5) === "false")
      return parseBoolean();
    // Если это null, то парсим null
    if (str.substr(index, 4) === "null") return parseNull();
    // Обработка символов-исключений
    throw new Error(`Незнакомый знак ${index}`);
  }
  //Пропускаем пробелы, табуляцию, перенос строки и возврат
  function skipWhitespace() {
    while (
      str[index] === " " ||
      str[index] === "\t" ||
      str[index] === "\n" ||
      str[index] === "\r"
    ) {
      index++;
    }
  }

  function parseString() {
    let result = "";
    index++; // Пропускаем открывающиеся кавычки
    // Пока не встретим новую кавычку записываем строку
    while (str[index] !== '"') {
      result += str[index];
      index++;
    }
    index++; // Пропускаем закрывающиеся ковычки
    return result;
  }

  function parseNumber() {
    //Берем индекс начала числа
    const start = index;
    //Проверяем все последующие символы на число при помощи простого регулярного выражения
    while (/^-?\d/.test(str[index])) index++;
    //Возвращаем число при помощи вырезания по найденному индексу
    return Number(str.slice(start, index));
  }

  function parseBoolean() {
    //Если в строке записанно true, то возваращем true
    if (str.substr(index, 4) === "true") {
      index += 4;
      return true;
      //Аналогично в противном случае возвращаем false
    } else {
      index += 5;
      return false;
    }
  }
  //Возвращаем null
  function parseNull() {
    index += 4;
    return null;
  }

  function parseObject() {
    let result = {};
    index++; // Пропускаем открывающиеся кавычки
    skipWhitespace();
    while (str[index] !== "}") {
      const key = parseString();
      skipWhitespace();
      if (str[index] !== ":") {
        debugger;
        return;
        throw new Error(`Знак ${index}`);
      }
      index++;
      const value = parseValue();
      result[key] = value;
      skipWhitespace();
      if (str[index] === ",") {
        index++; // Пропускаем запятые
        skipWhitespace();
      }
    }
    index++; // Пропускаем закрывающиеся ковычки
    return result;
  }

  function parseArray() {
    let result = [];
    index++; // Пропускаем открывающиеся кавычки
    skipWhitespace();
    while (str[index] !== "]") {
      const value = parseValue();
      result.push(value);
      skipWhitespace();
      if (str[index] === ",") {
        index++; // Пропускаем запятые
        skipWhitespace();
      }
    }
    index++; // Пропускаем закрывающиеся ковычки
    return result;
  }
  return parseValue();
}
