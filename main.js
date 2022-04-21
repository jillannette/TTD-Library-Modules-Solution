// write your code here to make the tests pass
var Library = function () {
  var books = [];

  var addBook = function (book) {
    books.push(book);
  };

  var checkOutbook = function (book) {
     if (books.includes(book)) {
      book.setAttribute('checkedOut', true);
     }
  };

  var returnBook = function (book) {
    if (books.includes(book)) {
    book.setAttribute('checkedOut', false);
    }
  };
 
    return {
      addBook: addBook,
      checkOutBook: checkOutbook,
      returnBook: returnBook
    };
  };

var Book = function (title, author) {
  var attributes = {
    checkedOut: false,
    title: title,
    author: author,
  };

  var getAttribute = function (prop) {
    if (attributes.hasOwnProperty(prop)) {
      return attributes[prop];
    }
  
    
  };
  var setAttribute = function (prop, value) {
    if (attributes.hasOwnProperty(prop)) {
      attributes[prop] = value;
    }
    
  };
    
  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  }


};
