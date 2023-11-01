// 15 Задача на асинхронность: напишите асинхронную функцию, которая использует ключевое слово await для ожидания выполнения других асинхронных операций, и возвращает результат выполнения.

export async function fetchData() {
  try {
    // Выполняем асинхронную операцию, например, запрос к API
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    // Ожидаем преобразования полученных данных в формат JSON
    const data = await response.json();

    // Возвращаем полученные данные
    return data;
  } catch (error) {
    // Обработка ошибок
    console.error("Произошла ошибка:", error);
    throw error;
  }
}
