// 13 Задача на классы и наследование: создайте базовый класс Shape (фигура), который имеет методы для расчета площади и периметра. Затем создайте подклассы, представляющие различные фигуры, такие как прямоугольник, круг и треугольник. Реализуйте методы расчета площади и периметра для каждой фигуры.

class Shape {
  // Площадь
  area() {
    throw new Error("Площадь определяется в классах-наследниках");
  }

  // Периметр
  perimeter() {
    throw new Error("Периметр определяется в классах-наследниках");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    // Наследуем свйства родительского объекта
    super();
    // Опредлим значения ширины и высоты
    this.width = width;
    this.height = height;
  }
  // Расчет площади прямоугольника
  area() {
    return this.width * this.height;
  }
  // Расчет периметра прямоугольника
  perimeter() {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  constructor(radius) {
    // Наследуем свйства родительского объекта
    super();
    // Опредлим значение радиуса окружности
    this.radius = radius;
  }
  // Расчет площади круга
  area() {
    return Math.PI * this.radius * this.radius;
  }
  // Расчет периметра круга
  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Triangle extends Shape {
  constructor(a, b, c) {
    // Наследуем свйства родительского объекта
    super();
    // Определим длины сторон треугольника
    this.a = a;
    this.b = b;
    this.c = c;
  }
  // Расчет площади треугольника, используя формулу Герона
  area() {
    const s = this.perimeter() / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
  // Расчет периметра треугольника
  perimeter() {
    return this.a + this.b + this.c;
  }
}

export { Shape, Rectangle, Circle, Triangle };
