const disсEn = [
    'My first order arrived today in perfect condition. From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch. Such great service. I look forward to shoppingon your site in the future and would highly recommend it.',
    "Just received my order, and I'm beyond impressed with the seamless experience from inquiry to delivery. Tecs has truly set a high standard for customer service. Can't wait to shop here again!",
    "Today, I experienced the epitome of excellent customer service from Tecs. From answering my pre-purchase query to the swift delivery of my order, everything was flawless. I'm impressed and will certainly be a repeat customer.",
    'Kudos to Tecs for their outstanding service! My order arrived in impeccable condition, and the constant communication reassured me at every step. I highly recommend this company for a hassle-free shopping experience.'
]
const discUa = [
    "Мій перший замовлення прибуло сьогодні в ідеальному стані. Від часу, коли я вислав запитання щодо товару, аж до здійснення покупки, доставки і тепер отримання, ваша компанія, Tecs, залишалася на зв'язку. Такий великий сервіс. Я з нетерпінням чекаю на подальший шопінг на вашому сайті і високо рекомендую його.",
    'Щойно отримав своє замовлення, і я вражений бездоганним досвідом від запитання до доставки. Tecs дійсно встановив високий стандарт обслуговування клієнтів. Не можу дочекатися, щоб знову сходити за покупками тут!',
    "Сьогодні я випробував апогей відмінного обслуговування від Tecs. Від відповіді на моє запитання перед покупкою до швидкої доставки мого замовлення - все було бездоганно. Я вражений і обов'язково стану повторним покупцем.",
    'Похвала Tecs за їхній винятковий сервіс! Моє замовлення прибуло в ідеальному стані, і постійна комунікація підтримувала мене на кожному етапі. Я високо рекомендую цю компанію для безпроблемного шопінгу.'
]
const nameArr = ['Ethan Anderson', 'Olivia Bennett', 'Jackson Mitchell', 'Lily Turner']
export function getSomeList() {
    return disсEn.map((item, index) => {
        return {
            userName: nameArr[index],
            advice: {
                en: item,
                ua: discUa[index]
            }
        }
    })
}
