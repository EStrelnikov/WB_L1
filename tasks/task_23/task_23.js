// 23 Анализатор сложности пароля: создайте функцию, которая оценивает сложность введенного пользователем пароля. Необходимо анализировать длину пароля, использование различных символов, наличие чисел и букв в разных регистрах. Выведите пользователю оценку сложности пароля и предложите улучшения, если пароль слишком слабый.

const btn = document.querySelector(".btn_check");
const passwordInput = document.querySelector(".password_input");
btn.addEventListener("click", () => analyzePassword(passwordInput.value));

function analyzePassword(password) {
  // проверка на пустоту
  if (password.length) {
    // Оценка длины пароля
    const lengthScore = password.length >= 8 ? 1 : 0;

    // Оценка использования различных символов
    const symbolScore = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password)
      ? 1
      : 0;

    // Оценка наличия чисел
    const numberScore = /\d/.test(password) ? 1 : 0;

    // Оценка наличия букв в разных регистрах
    const upperCaseScore = /[A-Z]/.test(password) ? 1 : 0;
    const lowerCaseScore = /[a-z]/.test(password) ? 1 : 0;

    // Общая оценка сложности пароля
    debugger;
    const totalScore =
      lengthScore + symbolScore + numberScore + upperCaseScore + lowerCaseScore;

    // Вывод оценки сложности и рекомендаций
    if (totalScore === 5) {
      alert("Оценка сложности пароля: сильный. Пароль достаточно сложный.");
    } else if (totalScore >= 2) {
      alert(
        "Оценка сложности пароля: средний. Рекомендуется добавить символы, цифры и использовать разные регистры."
      );
    } else {
      alert(
        "Оценка сложности пароля: слабый. Рекомендуется использовать более длинный пароль, добавить символы, цифры и использовать разные регистры."
      );
    }
  } else {
    alert("Введите пароль");
  }
  debugger;
}
