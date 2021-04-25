const Book = require('../../models/book.schema');

class BookController {
  static create(data) {
    return new Book(data).save();
  }

  static list() {
    return Book.find();
  }

  static update(data) {
    return Book.update(data);
  }

  static delete(id) {
    return Book.deleteOne({ _id: id });
  }
}

module.exports = BookController;
