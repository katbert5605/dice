const kubik_text_1 = document.querySelector('.d1');
const kubik_text_2 = document.querySelector('.d2');
const button = document.querySelector('.button__title');

function getRandomInt (max) {
    return Math.floor(Math.random() * max + 1);
};

button.addEventListener('click', () => {
    kubik_text_1.textContent = getRandomInt(6);
    kubik_text_2.textContent = getRandomInt(6);
});




