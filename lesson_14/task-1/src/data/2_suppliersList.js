import { v4 as uuidv4 } from 'uuid'
function getRandomRating() {
    return Math.floor(Math.random() * 100)
}
export const suppliersList = [
    {
        id: uuidv4(),
        imgSrc: 'https://horoshop.ua/content/uploads/images/suppliers/iway.png',
        title: 'iWAY',
        rating: getRandomRating(),
        icons: [
            {
                iconId: uuidv4(),
                iconTitle: 'fa-solid fa-car-side',
            },
            {
                iconId: uuidv4(),
                iconTitle: 'fa-solid fa-plane',
            },
        ],
    },
    {
        id: uuidv4(),
        imgSrc: 'https://horoshop.ua/content/uploads/images/suppliers/lyuksimo.png',
        title: 'Люксімо',
        rating: getRandomRating(),
        icons: [
            {
                iconId: uuidv4(),
                iconTitle: 'fa-solid fa-car-side',
            },
        ],
    },
    {
        id: uuidv4(),
        imgSrc: 'https://horoshop.ua/content/uploads/images/suppliers/kuhovar.png',
        title: 'Куховар',
        rating: getRandomRating(),
        icons: [
            {
                iconId: uuidv4(),
                iconTitle: 'fa-solid fa-plane',
            },
        ],
    },
    {
        id: uuidv4(),
        imgSrc: 'https://horoshop.ua/content/uploads/images/suppliers/equadorcoffee.png',
        title: 'EquadorCoffee',
        rating: getRandomRating(),
        icons: [
            {
                iconId: uuidv4(),
                iconTitle: 'fa-solid fa-car-side',
            },
            {
                iconId: uuidv4(),
                iconTitle: 'fa-sharp fa-solid fa-tire',
            },
        ],
    },
]
