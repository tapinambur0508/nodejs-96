import { jest } from "@jest/globals";

jest.unstable_mockModule("./generateNumber.js", () => {
  return {
    default: jest.fn().mockImplementation(() => 10),
  };
});

const lottery = (await import("./lottery.js")).default;

describe("lottery", () => {
  test("should win when expect 10", () => {
    const result = lottery(10);
    expect(result).toBe("$$$ You WIN $$$. Get your free 500FS");
  });

  test("should lose when expect 5", () => {
    const result = lottery(5);
    expect(result).toBe("You lost:(");
  });
});
