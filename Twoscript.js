const books = [
    { title: "Информационные системы и программирование. Администратор баз данных", author: "Максим Логачев", genre: "Учебник", img: 'src="Inf1.jpg" ', link: 'InfOne.html' },
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