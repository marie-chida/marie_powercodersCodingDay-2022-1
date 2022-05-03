// document.write("TEST");

let books = [{
    title: 'Romeo and Juliet',
    author: 'Shakespeare',
    isSold: true,
    price: "5"
    },
    {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    isSold: true,
    price: "4"
    },
    {
    title: 'Murder on the Orient Express',
    author: 'Agatha Christie',
    isSold: true,
    price: "3"
    }];

    function bookInfo(){
        document.write(`${books.title} by ${books.author}`);
    };

    bookInfo();



