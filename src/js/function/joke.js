const joking = () => {
    const but = document.querySelector('button');
    const finder = document.querySelector('.finder')
    const title = document.querySelector('h2');
    but.addEventListener('click', () => {
        finder.style.display = 'block';
        finder.style.padding = '2rem';
        let oneLinerJoke = require('one-liner-joke');
        let getRandomJoke = oneLinerJoke.getRandomJoke();
        title.textContent = getRandomJoke.body;
    })
}

export default joking