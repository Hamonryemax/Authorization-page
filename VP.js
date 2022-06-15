const button = document.getElementById('button');
button.addEventListener('click', authorization);

function authorization() {
    const login = document.getElementById('login').value;
    const pass = document.getElementById('pass').value;
    if (login === '' || pass === '') {
        alert('Не заполнены поля ввода!');
        return;
    }
    getVerification(login, pass);
}

function getVerification(login, pass) {
    const arrayLogin = login.split('');
    const arrayPass = pass.split('');
    if (arrayLogin[1] === arrayPass[2] && arrayLogin[2] === arrayPass[1]
        && arrayLogin[arrayLogin.length - 2] === arrayPass[arrayPass.length - 3]
        && arrayLogin[arrayLogin.length - 3] === arrayPass[arrayPass.length - 2]) {
        showLoading();
        console.log('true');
    } else {
        showLoading();
        console.log('false');
    }
}

function showLoading() {
    const loading = document.querySelector('.loading');
    const remove = function () {
        loading.classList.remove('loading-visible');
    };
    loading.classList.add('loading-visible');
    setTimeout(remove, getRandom(1000, 3000));
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
