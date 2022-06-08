document.getElementById('button').addEventListener('click', showLoading);

function showLoading() {
    const loading = document.querySelector('.loading');
    const remove = () => {
        loading.classList.remove('loading-visible');
    }
    loading.classList.add('loading-visible');
    setTimeout(remove, 3000);
}


