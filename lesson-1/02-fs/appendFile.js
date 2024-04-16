const fs = require("node:fs/promises");

const filePath = "append.txt";

fs.appendFile(filePath, "I love Node.js\n")
  .then((data) => console.log({ data }))
  .catch((err) => {
    throw err;
  });
