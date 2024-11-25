const main = () => {
    const grow = document.getElementById('grow-me')
    grow.classList.add('big')

    const shrink = document.getElementById('shrink-me')
    shrink.classList.remove('big')

    const list = document.querySelectorAll('li')
    for (let i = 0; i < list.length; i++ ) {
        console.log(list.item[i])
    }

    const link = document.querySelector('a')
    link.href = 'https://www.example.com'
    link.textContent = 'somewhere'

    const hide = document.getElementById('hide-me')
    hide.style.display = "none"

    const show = document.getElementById('show-me')
    show.style.display = 'block'

    let name = document.getElementById('name')
    const header = document.querySelector('h1'); 
    header.textContent = 'Welcome ' + name
}