// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
function caclculateAverage() {
  let numAverage = 0;
  let counter = 0;
  for (const arg of arguments) {
    if (typeof arg === "number") {
      numAverage += arg;
      counter += 1;
    }
  }
  return numAverage / counter || 0;
}
console.log(caclculateAverage());
