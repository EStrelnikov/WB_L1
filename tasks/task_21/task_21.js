// 21 Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari (если есть возможность).

function sizeStack(count = 1) {
  try {
    return count + sizeStack();
  } catch (error) {
    // достигнут максимальный размер стека, вернем количество.
    return count;
  }
}

console.log(sizeStack());
document.querySelector(".count").innerText = sizeStack();

// Chrome  = 11 415
// Mazilla Firefox = 18 766
// Яндекс Браузер =  11 417
