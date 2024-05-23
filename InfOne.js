document.addEventListener('DOMContentLoaded', function() {
    const planButton = document.querySelector('.plan-button');

    
    planButton.addEventListener('click', function(event) {
        event.preventDefault();

        const bookTitle = document.querySelector('.title').textContent;
        const bookAuthor = document.querySelector('.author').textContent.replace('Автор: ', '');
        const bookGenres = document.querySelector('.genres').textContent.replace('Жанры: ', '');

        const authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));

        if (authenticatedUser) {
            const userReadingListKey = `readingList_${authenticatedUser.email}`;
            let userReadingList = JSON.parse(localStorage.getItem(userReadingListKey)) || [];

            
            const bookImagePath = 'Inf1.jpg';

            const book = {
                title: bookTitle,
                author: bookAuthor,
                genres: bookGenres,
                image: bookImagePath,
                link: 'InfOne.html'
            };

            
            const isBookExists = userReadingList.some((item) => item.title === bookTitle && item.author === bookAuthor);
            
            if (!isBookExists) {
                userReadingList.push(book);
                localStorage.setItem(userReadingListKey, JSON.stringify(userReadingList));
                alert('Книга была добавлена в ваш список прочитанных книг!');
            } else {
                alert('Эта книга уже есть в вашем списке прочитанных книг.');
            }

        } else {
            alert('Для добавления книги в список прочитанных необходимо авторизоваться!');
        }
    });

    
    function displayComment(comment) {
        const commentsList = document.getElementById('comments-list');
        const commentElement = document.createElement('div');
        commentElement.innerText = `${comment.nickname}: ${comment.text}`;
        commentsList.appendChild(commentElement);
    }

    // Функция для сохранения комментария
    function saveComment(comment) {
        const allComments = JSON.parse(localStorage.getItem('InfOneComments')) || [];
        allComments.push(comment);
        localStorage.setItem('InfOneComments', JSON.stringify(allComments));
    }

    // Обработчик события клика на кнопку "Отправить" комментарий
    const submitButton = document.getElementById('submit-comment');
    submitButton.addEventListener('click', () => {
        const commentInput = document.getElementById('comment-input');
        const commentText = commentInput.value.trim();

        if (commentText !== '') {
            const authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));

            const comment = {
                nickname: authenticatedUser.nickname,
                text: commentText
            };

            saveComment(comment);
            displayComment(comment);

            commentInput.value = '';
        } else {
            alert('Пожалуйста, напишите комментарий перед отправкой!');
        }
    });

    // Восстановление комментариев из localStorage при загрузке страницы
    const allComments = JSON.parse(localStorage.getItem('InfOneComments')) || [];
    allComments.forEach(comment => {
        displayComment(comment);
    });
});
