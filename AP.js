const button = document.getElementById('button');
button.addEventListener('click', showLoadingAndAuthorization);

function showLoadingAndAuthorization() {
    const login = document.getElementById('login').value;
    const pass = document.getElementById('pass').value;
    if (login === '' || pass === '') {
        return;
    }
    inputDisabled();
    const loading = document.querySelector('.loading');
    const remove = function () {
        loading.classList.remove('loading-visible');
        authorization();
        inputNonDisabled();
    };
    loading.classList.add('loading-visible');
    setTimeout(remove, getRandom(1000, 3000));
}

function authorization() {
    const login = document.getElementById('login').value;
    const pass = document.getElementById('pass').value;
    getVerification(login, pass);
}

function getVerification(login, pass) {
    const button = document.getElementById('button');
    const arrayLogin = login.split('');
    const arrayPass = pass.split('');
    if (arrayLogin[1] === arrayPass[2] && arrayLogin[2] === arrayPass[1]
        && arrayLogin[arrayLogin.length - 2] === arrayPass[arrayPass.length - 3]
        && arrayLogin[arrayLogin.length - 3] === arrayPass[arrayPass.length - 2]) {
        const succ = document.querySelector('.success');
        const removeSuccess = function () {
            succ.classList.remove('show-success');
            button.classList.remove('button-none');
        };
        succ.classList.add('show-success');
        button.classList.add('button-none');
        setTimeout(removeSuccess, 3000);
        console.log('true');
    } else {
        const error = document.querySelector('.error');
        const removeError = function () {
            error.classList.remove('show-error');
            button.classList.remove('button-none');
        }
        error.classList.add('show-error');
        button.classList.add('button-none');
        setTimeout(removeError, 3000);
        console.log('false');
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function inputDisabled() {
    document.getElementById('login').setAttribute('disabled', 'disabled');
    document.getElementById('pass').setAttribute('disabled', 'disabled');
}

function inputNonDisabled() {
    document.getElementById('login').removeAttribute('disabled');
    document.getElementById('pass').removeAttribute('disabled');
}
