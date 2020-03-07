"use strict";
class Calculator {
  add(a, b) {
    if (a === 0) return b;
    if (b === 0) return b;
    return a + b;
  }
}

it("should add numbers", function() {
  const result = Calculator.add(2, 2);
  expect(result).toBe(5);
});
