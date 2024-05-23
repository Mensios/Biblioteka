document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nickname = document.getElementById('nickname').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value; 

    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        alert('Пароли не совпадают, пожалуйста, повторите ввод.');
        return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = storedUsers.find(user => user.nickname === nickname);
    if (existingUser) {
        alert('Пользователь с таким никнеймом уже зарегистрирован.');
        return;
    }

    const newUser = {
        nickname: nickname,
        password: password,
        email: email,
        role: role 
    };
    storedUsers.push(newUser);

    localStorage.setItem('users', JSON.stringify(storedUsers));

    alert('Регистрация успешно завершена!');

    window.location.href = 'authorization.html';
});
