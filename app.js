const btn = document.querySelector('.btn');
const city = document.querySelector('.city');

btn.addEventListener('click', () => {
    if (city.hidden) {
        document.querySelector('.img').style = `
        background-image: url(./assets/Chevron.svg)`
        city.hidden = false
    } else {
        city.hidden = true
        document.querySelector('.img').style = `
        background-image: url(./assets/Chevron\ \(1\).svg)`
    }
})