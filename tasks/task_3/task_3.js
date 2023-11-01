// 3 Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:
// вычисление N-го числа в ряду Фибоначчи Ф
// вычисление всех чисел в ряду Фибоначчи до числа N
// вычисление N-го простого числа
// вычисление всех простых чисел до числа N

// создаем обьект значениями которго будут функции

export const mathX = {
  // вычисление N-го числа в ряду Фибоначчи Ф
  fibonacci: function (number) {
    // возвращаем число если оно меньше 2
    if (number < 2) return number;
    // вызщываем рекурсивно num - 1 и рекурсивно num -2
    return this.fibonacci(number - 1) + this.fibonacci(number - 2);
  },
  // вычисление всех чисел в ряду Фибоначчи до числа N
  fibonacciSeries: function (number) {
    // константа для суммы чисел Фибоначи
    // если сами числа, можно скалдывать в массив
    // let arr = []
    let sum = 0;
    for (let i = 0; i < number; i++) {
      // sum.push(this.fibonacci(i));
      sum += this.fibonacci(i);
    }
    return sum;
  },
  // опредление простого числа
  isPrime: function (number) {
    for (let i = 2, max = Math.sqrt(number); i <= max; i++) {
      if (number % i === 0) return false;
    }
    return true;
  },
  // вычисление всех простых чисел до числа N
  sumPrime: function (number) {
    const primes = [];
    for (let i = 2; i <= number; i++) {
      if (this.isPrime(i)) primes.push(i);
    }
    return primes;
  },
  // вычисление N-го простого числа
  primeNumberN: function (number) {
    // массив для хранения простых чисел
    const primes = [];
    // цикл беконечный
    for (let i = 2; i > 0; i++) {
      if (this.isPrime(i)) primes.push(i);
      // если длина нашего массива равна N-му простому числу возвращаем это число
      if (primes.length === number) return i;
    }
  },
};
// console.log(mathX.fibonacci(10));
// console.log(mathX.fibonacciSeries(10));
// console.log(mathX.sumPrime(120));
// console.log(mathX.primeNumberN(10));
