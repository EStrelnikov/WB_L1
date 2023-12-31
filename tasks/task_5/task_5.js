// 5 Разработайте функцию преобразования JSON в связный список. На входе функция должна получать JSON, содержащий список объектов, на выходе объект, представляющий из себя односвязный список.

export const jsonLinkedList = function (json) {
  // Преобразуем JSON в массив объектов
  const arr = JSON.parse(json);

  // Если полученные данные не являются массивом или если массив пуст, функция возвращает null, так как списка нет
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  // Создаем голову связного списка из первого элемента массива
  let head = {
    data: arr[0],
    next: null,
  };

  // отслеживание текущего узла
  let current = head;

  // Проходим по оставшимся элементам массива
  arr.forEach((item) => {
    // Создаем новый узел
    const newElem = {
      data: item,
      next: null,
    };

    // Связываем текущий узел с новым узлом
    current.next = newElem;

    // Перемещаем указатель текущего узла на новый узел
    current = newElem;
  });

  // Возвращаем голову связного списка
  return head;
};
