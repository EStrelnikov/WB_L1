// 29  Задача: Взаимодействие с формами: Напишите функцию, которая получает данные из формы на веб-странице и выполняет определенные действия с этими данными, например, отправляет их на сервер или отображает всплывающее окно с результатами.

document.querySelector(".form").addEventListener("submit", (e) => {
  // Отсанавливаем дефольтное поведение
  e.preventDefault();

  // Получаем данные из формы
  const login = e.target.login.value;
  const password = e.target.password.value;

  // Выполняем необходимое действие данными
  alert(`Логин: ${login}, Пароль: ${password}`);

  // fetch('url', {
  //     method: 'POST',
  //     body: JSON.stringify({ login, password }),
  //     headers: { 'Content-Type': 'application/json' }
  // });
});
