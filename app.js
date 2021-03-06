document.addEventListener('DOMContentLoaded', () => {

    /* Card Options */
    const cardArray = [
        {
            name: 'cheeseburger',
            img: './images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: './images/cheeseburger.png'
        },
        {
            name: 'fries',
            img: './images/fries.png'
        },
        {
            name: 'fries',
            img: './images/fries.png'
        },
        {
            name: 'hotdog',
            img: './images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: './images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: './images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: './images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: './images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: './images/milkshake.png'
        },
        {
            name: 'pizza',
            img: './images/pizza.png'
        },
        {
            name: 'pizza',
            img: './images/pizza.png'
        },
    ]

    const grid = document.querySelector('.grid')

    /* Create game board */
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipcard())
            grid.appendChild(card)
        }
    }

    createBoard()
})