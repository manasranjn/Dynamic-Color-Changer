const body = document.querySelector('body');
const title = document.querySelector('.title');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const reset = document.querySelector('.reset');

btn1.addEventListener('click', () => {
    body.style.backgroundColor = "#f96ba4";
    title.style.color = "#f1f1f1";
});

btn2.addEventListener('click', () => {
    title.style.fontSize = "4rem";
});

reset.addEventListener('click', () => {
    body.style.backgroundColor = "#f1f1f1";
    title.style.color = "#f96ba4";
    title.style.fontSize = "2rem";
});