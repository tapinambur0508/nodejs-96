import sum from "../sum.js";

describe("sum", () => {
  test("1 + 2 should be 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  test("2 + (-2) should be 0", () => {
    const result = sum(2, -2);
    expect(result).toBe(0);
  });
});
