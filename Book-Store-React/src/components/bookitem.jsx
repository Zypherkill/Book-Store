import books from '../books.json';

function BookItem({ book }) {
    return (
        <>
        <h2>{book.title}</h2>
        <h4>{book.author}</h4>
        <p>{book.desc}</p>
        <button>Lägg till i kundvagn</button>
        </>
    );
}

export default BookItem;