const title = document.querySelector('.title');
const content = document.querySelector('.content');

title.addEventListener('click', () => {
    content.classList.toggle('show');
});
