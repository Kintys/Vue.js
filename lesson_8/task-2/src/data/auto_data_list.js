import { v4 as uuidv4 } from 'uuid'

export const autoDataList = [
    {
        id: uuidv4(),
        titleCategory: 'Легкові',
        itemList: [
            {
                id: uuidv4(),
                title: 'Hyundai Kona Electric 2020',
                mark: 'Hyundai',
                mileage: '24',
                link: 'https://auto.ria.com/',
                year: '2018',
                color: 'Білий',
                local: 'Київ',
                price: 17499,
                fuelType: 'Електричний',
                image: require('@/assets/passenger-car/hyundai_kona-electric__521720320s.webp'),
            },
            {
                id: uuidv4(),
                title: 'Skoda Octavia 2007',
                mark: 'Skoda',
                mileage: '110',
                link: 'https://auto.ria.com/',
                year: '2007',
                color: 'Сірий',
                local: 'Дніпро',
                price: 8500,
                fuelType: 'Дизель',
                image: require('@/assets/passenger-car/skoda_octavia__523715734f.webp'),
            },
            {
                id: uuidv4(),
                title: 'BMW 3 Series GT 2013',
                mark: 'BMW',
                mileage: '17',
                link: 'https://auto.ria.com/',
                year: '2017',
                color: 'Чорний',
                local: 'Кривий Ріг',
                price: 18000,
                fuelType: 'Бензин',
                image: require('@/assets/passenger-car/bmw_3-series-gt__522696023f.webp'),
            },
            {
                id: uuidv4(),
                title: 'Volkswagen ID.4 Crozz 2023',
                mark: 'Volkswagen',
                mileage: '14',
                link: 'https://auto.ria.com/',
                year: '2019',
                color: 'Білий',
                local: 'Рівно',
                price: 27800,
                fuelType: 'Електричний',
                image: require('@/assets/passenger-car/volkswagen_id-4-crozz__523114142f.webp'),
            },
        ],
    },
    {
        id: uuidv4(),
        titleCategory: 'Мото',
        itemList: [
            {
                id: uuidv4(),
                title: 'KTM SX 65 2017',
                mark: 'KTM',
                mileage: '120',
                link: 'https://auto.ria.com/',
                year: '2017',
                color: 'Жовтий',
                local: 'Харків',
                price: 3300,
                fuelType: 'Бензин',
                image: require('@/assets/moto/ktm_sx-65__523663888f.webp'),
            },
            {
                id: uuidv4(),
                title: 'BRP Maverick X3 2020',
                mark: 'BRP',
                mileage: '40',
                link: 'https://auto.ria.com/',
                year: '2020',
                color: 'Жовтий',
                local: 'Луцк',
                price: 32000,
                fuelType: 'Бензин',
                image: require('@/assets/moto/brp_maverick-x3__517713697f.webp'),
            },
            {
                id: uuidv4(),
                title: 'Honda VTX 1300S 2004',
                mark: 'Honda',
                mileage: '70',
                link: 'https://auto.ria.com/',
                year: '2004',
                color: 'Чорний',
                local: 'Київ',
                price: 7500,
                fuelType: 'Бензин',
                image: require('@/assets/moto/honda_vtx-1300s__522981233f.webp'),
            },
            {
                id: uuidv4(),
                title: 'Suzuki Boulevard 2009',
                mark: 'Suzuki',
                mileage: '134',
                link: 'https://auto.ria.com/',
                year: '2009',
                color: 'Чорний',
                local: 'Київ',
                price: 3800,
                fuelType: 'Бензин',
                image: require('@/assets/moto/suzuki_boulevard__505270672f.webp'),
            },
        ],
    },
    {
        id: uuidv4(),
        titleCategory: 'Автобуси',
        itemList: [
            {
                id: uuidv4(),
                title: 'Setra 415 GT-HD 2012',
                mark: 'Setra',
                mileage: '180',
                link: 'https://auto.ria.com/',
                year: '2012',
                color: 'Білий',
                local: 'Одеса',
                price: 125000,
                fuelType: 'Дизель',
                image: require('@/assets/bus/setra_415-gt-hd__514105611f.webp'),
            },
            {
                id: uuidv4(),
                title: 'Van Hool T916 Acron 2012',
                mark: 'Van Hool',
                mileage: '210',
                link: 'https://auto.ria.com/',
                year: '2012',
                color: 'Чорний',
                local: 'Хмельницький',
                price: 128000,
                fuelType: 'Дизель',
                image: require('@/assets/bus/van-hool_t916-acron__513499944f.webp'),
            },
            {
                id: uuidv4(),
                title: 'Mercedes-Benz Tourismo 2008',
                mark: 'Mercedes-Benz',
                mileage: '173',
                link: 'https://auto.ria.com/',
                year: '2008',
                color: 'Сірий',
                local: 'Чернігів',
                price: 128000,
                fuelType: 'Дизель',
                image: require('@/assets/bus/mercedes-benz_tourismo__492218447f.webp'),
            },
            {
                id: uuidv4(),
                title: 'Fiat Ducato 2016',
                mark: 'Fiat',
                mileage: '146',
                link: 'https://auto.ria.com/',
                year: '2016',
                color: 'Білий',
                local: 'Ужгород',
                price: 128000,
                fuelType: 'Дизель',
                image: require('@/assets/bus/fiat_ducato__518429277f.webp'),
            },
        ],
    },
    {
        id: uuidv4(),
        titleCategory: 'Грузовики',
        itemList: [
            {
                id: uuidv4(),
                title: 'Mercedes-Benz Sprinter 2021 W907/W910 • 319 CDI 3.0 AT (190 к.с.)',
                mark: 'Mercedes-Benz',
                mileage: '36',
                link: 'https://auto.ria.com/',
                year: '2021',
                color: 'Білий',
                local: 'Ужгород',
                price: 43300,
                fuelType: 'Дизель',
                image: require('@/assets/tyres/mercedes-benz_sprinter__517362210f.webp'),
            },
            {
                id: uuidv4(),
                title: 'Mercedes-Benz Sprinter 2016',
                mark: 'Mercedes-Benz',
                mileage: '76',
                link: 'https://auto.ria.com/',
                year: '2016',
                color: 'Чорний',
                local: 'Хресон',
                price: 21200,
                fuelType: 'Дизель',
                image: require('@/assets/tyres/mercedes-benz_sprinter__521592149f.webp'),
            },
            {
                id: uuidv4(),
                title: 'MAN TGX 2011',
                mark: 'MAN',
                mileage: '156',
                link: 'https://auto.ria.com/',
                year: '2011',
                color: 'Сірий',
                local: 'Миколаїв',
                price: 25900,
                fuelType: 'Дизель',
                image: require('@/assets/tyres/man_tgx__522693502f.webp'),
            },
            {
                id: uuidv4(),
                title: 'Renault Master 2019',
                mark: 'Renault',
                mileage: '134',
                link: 'https://auto.ria.com/',
                year: '2019',
                color: 'Сірий',
                local: 'Київ',
                price: 18650,
                fuelType: 'Дизель',
                image: require('@/assets/tyres/mercedes-benz_sprinter__523674229f.webp'),
            },
        ],
    },
]