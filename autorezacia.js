document.getElementById('authorization-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value; // Получаем роль с формы авторизации

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const authenticatedUser = storedUsers.find(user => user.nickname === username && user.password === password && user.role === role);

    if (authenticatedUser) {
        alert('Авторизация успешна! Добро пожаловать, ' + username + ' Группа ' + role + '!');

        
        localStorage.setItem('authenticatedUser', JSON.stringify(authenticatedUser));

        
        window.location.href = 'profile.html';
    } else {
        alert('Неправильные данные для входа. Пожалуйста, проверьте свой никнейм, пароль и группу.');
    }

    document.getElementById('authorization-form').reset();
});


document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    const newUser = {
        nickname: newUsername,
        password: newPassword
    };

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.push(newUser);

    localStorage.setItem('users', JSON.stringify(storedUsers));

    alert('Пользователь успешно зарегистрирован!');

    document.getElementById('registration-form').reset();
});
