import generateNumber from "./generateNumber.js";

function lottery(expect) {
  const actual = generateNumber();

  if (actual !== expect) {
    return "You lost:(";
  }

  return "$$$ You WIN $$$. Get your free 500FS";
}

export default lottery;
