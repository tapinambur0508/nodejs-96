import { program } from "commander";

import Books from "./books/index.js";

async function invokeAction({ action, id, title, author }) {
  switch (action) {
    case "getAll":
      const books = await Books.getBooks();
      return books;
    case "getById":
      const book = await Books.getBook(id);
      return book;
    case "create":
      const createdBook = await Books.createBook({ title, author });
      return createdBook;
    case "update":
      const updatedBook = await Books.updateBook(id, { title, author });
      return updatedBook;
    case "remove":
      const removedBook = await Books.removeBook(id);
      return removedBook;
    default:
      return "unknown action:(";
  }
}

program
  .option("-a, --action <action>", "Action to invoke")
  .option("-i, --id <id>", "Book id")
  .option("-t, --title <title>", "Book title")
  .option("-at, --author <author>", "Book author");

program.parse(process.argv);

invokeAction(program.opts()).then(console.log).catch(console.error);
