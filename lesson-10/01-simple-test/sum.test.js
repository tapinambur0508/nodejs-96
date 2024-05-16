import sum from "./sum.js";

// {
//   const result = sum(1, 2);

//   if (result !== 3) {
//     throw new Error(`Expected 3, but got ${result}`);
//   }
// }

// {
//   const result = sum(2, -2);

//   if (result !== 0) {
//     throw new Error(`Expected 0, but got ${result}`);
//   }
// }

// console.log("Done");

function describe(text, cb) {
  console.log(text);
  cb();
}

function test(text, cb) {
  console.log(`  ${text}`);
  cb();
}

function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`Expected ${expected}, but got ${result}`);
      }
    }
  }
}

describe("sum", () => {
  test("1 + 2 should be 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  test("2 + (-2) should be 0", () => {
    const result = sum(2, -2);
    expect(result).toBe(0);
  });

  console.log("Done");
});
