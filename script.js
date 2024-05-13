const books = [
    { title: "Девять рассказов", author: "Джером Дэвид Сэлинджер", genre: "Нарратив, Фикшн", img: 'src="five.jpg" ', link: 'OneBook.html' },
    { title: "Великий Гэтсби", author: "Фрэнсис Скотт Фицджеральд", genre: "Драма", img: 'src="TwoBook.jpg" style="width: 90px;"', link: 'TwoBook.html'},
    { title: "Оскар и Розовая Дама", author: "Эрик-Эмманюэль Шмитт", genre: "Роман", img: 'src="ThreeBook.jpg" style="width: 90px;"',link: 'ThreeBook.html'},
];

const searchInput = document.getElementById('search-input');
const bookList = document.querySelector('.book-list');

searchInput.addEventListener('input', function () {
    const searchText = searchInput.value.trim().toLowerCase();
    const filteredBooks = searchText ? books.filter(book => book.title.toLowerCase().includes(searchText)) : books;
    updateBookList(filteredBooks);
});

function updateBookList(filteredBooks) {
    bookList.innerHTML = '';
    filteredBooks.forEach(book => {
        const li = document.createElement('li');
        li.innerHTML = `
        <h3>${book.title}</h3>
        <a href="${book.link}"><img ${book.img}" style="width: 90px;"></a>
        <p>Автор: ${book.author}</p>
        <p>Жанр: ${book.genre}</p>
        `;
        bookList.appendChild(li);
    });
}