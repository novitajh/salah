const YES = document.querySelector('#iya');
const NO = document.querySelector('#tidak');
NO.addEventListener('click', () => {
    document.querySelectorAll('button').forEach((button) => {
        button.remove();
    });
    document.querySelector('.wrapper > div').style.backgroundColor = '#6FD240';
    document.querySelector('.wrapper h1').innerText = 'Anda Benar!';
    document.querySelector('.wrapper > div > div > div:first-child > p').innerText = 'Anda adalah seorang Mahasiswa';
    document.querySelector('.wrapper > div > img').setAttribute('src','assets/mahasiswa.png')
});
YES.addEventListener('click', () => {
    document.querySelectorAll('button').forEach((button) => {
        button.remove();
    });
    document.querySelector('.wrapper > div').style.backgroundColor = '#E12E2E';
    document.querySelector('.wrapper h1').innerText = 'Anda Berbohong!';
    document.querySelector('.wrapper > div > div > div:first-child > p').innerText = 'Anda adalah seorang Teknisi';
    document.querySelector('.wrapper > div > img').setAttribute('src','assets/teknisi.png')
});