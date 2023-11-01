// 1 Задача о палиндроме:. Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра»).

// 1 вариант

export function isPalindrome(str) {
  // удаляем все проблеы и приводим все символы к нижнему регистру
  str = str.replace(/\s/g, "").toLowerCase();

  // если длина строки меньше или равна 1 - это палиндром
  if (str.length <= 1) {
    return true;
  }

  // если первый и последний символы не равны - не палиндром, возвращаем false
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  // вызываем снова функцию, передаем строку с обрезанным символом первым и последним
  return isPalindrome(str.slice(1, -1));
}

// 2 вариант

export function isPalindrome2(str) {
  // удаляем все проблеы и приводим все символы к нижнему регистру
  str = str.replace(/\s/g, "").toLowerCase();

  // делаем массив элементов, делаем его зеркальным, массив переводим в строку
  const reversed = str.split("").reverse().join("");

  // сравниваем оригинальную строку и разверную
  return str === reversed;
}

// console.log(
//     "А роза упала на лапу Азора",
//     isPalindrome("А роза упала на лапу Азора")
//   );
//   console.log("hello", isPalindrome("hello"));
//   console.log("аргентина манит негра", isPalindrome2("аргентина манит негра"));
//   console.log("isPalindrome2", isPalindrome2("isPalindrome2"));
