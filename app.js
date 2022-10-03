const btn = document.querySelector('.btn');
const city = document.querySelector('.city');

function showArrow() {
    if (city.hidden) {
        document.querySelector('.img').style = `
        background-image: url(./assets/Chevron.svg)`
        city.hidden = false
    } else {
        city.hidden = true
        document.querySelector('.img').style = `
        background-image: url(./assets/Chevron\ \(1\).svg)`
    }
}

btn.addEventListener('click', () => {
    showArrow()
})

city.addEventListener('click', event => {
    document.querySelector('.btn p').textContent = event.target.textContent
    showArrow()
})