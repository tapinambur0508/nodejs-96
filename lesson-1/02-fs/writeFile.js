const fs = require("node:fs/promises");

const str = JSON.stringify([1, 2, 3, 4, 5, 6]);

fs.writeFile("write.txt", str)
  .then((data) => console.log({ data }))
  .catch((err) => {
    throw err;
  });
