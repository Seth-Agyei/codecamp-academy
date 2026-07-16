// Author : seth <GitHubName : Seth-Agyei>

// parent class
class user {
    constructor(data){
        this.fullName = data.fullName
        this.student = data.student
    }

    // Protect method
    _generateBorrowedCode(){
       const randomNumber = Math.floor(Math.random() * 9000) + 1000;
       return `BRW-${randomNumber}`
    }
}

//Child class
class Student extends User {

    constructor(data){
        super(data)
        this.borrowedBooks = []
    }

    //Private method
    #validateBook(book){
        return(
            book.title &&
            book.author &&
            book.copies > 0
        );
    }

    //Public method
    borrowedBook(data){
        const book= {
            title : data.title,
            author : data.author,
            copies : data.copies
        }

        
    if (!this.#validateBook(book)) {
        return "Invalid book information"
    }

    const borrowedBook = {
        borrowCode : this._generateBorrowedCode,
        title : data.title,
        author: data.author,
        borrowDate : new Date()
    }
     
    this.borrowedBooks.push(this.borrowedBook);

    return `${data.title} borrowed successfully`
    }

   // 
   returnBook(bookTitle){
       const index = this.borrowedBooks.findIndex(book => book.title.toLowerCase() === borrowedBook )

        if (index === -1){
          return "Borrowed record not found"
        }

        this.borrowedBooks.splice(index, 1)

        return "Book borrowed successfuly"
    }
   

   // Public method
   showBorrowedBooks(){
     return this.borrowedBooks
   }

   //Static method
   static calculateFee(daysLate){
     return daysLate * 2;
   }
}


//Object creation
const jimmy = new Student (
    {
        fullName: "James Isaac Neutron",
        studentId: 23456776
    }
)

console.log(jimmy.borrowedBook())