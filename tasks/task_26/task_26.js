// 26 Задача: Рекурсивный обход дерева DOM:: Напишите функцию, которая рекурсивно обходит дерево DOM, начиная с указанного элемента, и выполняет определенное действие с каждым узлом (например, выводить информацию о теге в консоль).

function bypassDOM(node) {
  if (!node) return;

  // Вывод информации о теге текущего узла в консоль
  console.log("Тег:", node.tagName);

  // Рекурсивный обход всех дочерних узлов текущего узла
  for (let i = 0; i < node.children.length; i++) {
    const children = node.children[i];
    // Вызываем функцию bypassDOM для каждого дочернего узла
    bypassDOM(children);
  }
}

// Начинаем обход дерева DOM с указанного элемента
bypassDOM(document.body);
