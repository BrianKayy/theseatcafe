import hd from './images/hotdog.jpeg';
// import ms from './images/mushroom.jpg';
// import mp from './images/mag.jpg';
// import pp from './images/pepperoni.jpg';
import ff from './images/fries.jpeg';
import hdc from './images/chicken hotdog.jpeg';
import a from './images/arabiata.jpg';
import p from './images/peneC.jpg';
import c from './images/cabanora.jpeg';
import cs from './images/chicken.jpeg';

const Specials = {
     Special:[
        // {
        //     id:  '16',
        //     name: 'PEPPERONI PIZZA ',
        //     price: '31.50',
        //     image: pp,
        //     details: 'all prices include 5% VAT'
        // },
        // {
        //     id:  '17',
        //     name: 'MUSHROOM PIZZA',
        //     price: '32.55',
        //     image: ms,
        //     details: 'all prices include 5% VAT'
        // },
        // {
        //     id:  '15',
        //     name: 'MARGARITA PIZZA',
        //     price: '29.40',
        //     image: mp,
        //     details: 'all prices include 5% VAT'
        // },
                {
            id:  '13',
            name: 'CARBANORA PASTA',
            price: '36.75',
            image: c,
            details: 'all prices include 5% VAT'
        },
        {
            id:  '14',
            name: 'CHICKEN PASTA WITH SPINACH',
            price: '29.00',
            image: cs,
            details: 'all prices include 5% VAT'
        },
        {
            id:  '12',
            name: 'FRIES',
            price: '15.75',
            image: ff,
            details: 'all prices include 5% VAT'
        },

        {
            id:  '13',
            name: 'HOT DOG CHICKEN',
            price: '29.40',
            image: hdc,
            details: 'all prices include 5% VAT'
        },
        {
            id:  '14',
            name: 'HOT DOG BEEF',
            price: '29.40',
            image: hd,
            details: 'all prices include 5% VAT'
        },
        {
            id:  '13',
            name: 'PENE CHICKEN(white sauce)',
            price: '36.75',
            image: p,
            details: 'all prices include 5% VAT'
        },
        {
            id:  '14',
            name: 'PENE CHICKEN(red sauce)',
            price: '36.75',
            image: a,
            details: 'all prices include 5% VAT'
        },
        
    ]
}

export default Specials;
