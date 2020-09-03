import HP1 from '../img/images/headphones/HP1.jpg';
import HP2 from '../img/images/headphones/HP2.jpg';
import HP3 from '../img/images/headphones/HP3.jpg';
import HP4 from '../img/images/headphones/HP4.jpg';
import HP5 from '../img/images/headphones/HP5.jpg';
import HP6 from '../img/images/headphones/HP6.jpg';
import HP7 from '../img/images/headphones/HP7.jpg';
import HP8 from '../img/images/headphones/HP8.jpg';
import HP9 from '../img/images/headphones/productsBcg.jpg';

import LP1 from '../img/images/laptop/LP1.jpg';
import LP2 from '../img/images/laptop/LP2.jpg';
import LP3 from '../img/images/laptop/LP3.jpg';
import LP4 from '../img/images/laptop/LP4.jpg';
import LP5 from '../img/images/laptop/LP5.jpg';
import LP6 from '../img/images/laptop/LP6.jpg';
import LP7 from '../img/images/laptop/LP7.jpg';
import LP8 from '../img/images/laptop/LP7.jpg';

import P1 from '../img/images/phones/phone1.jpg';
import P2 from '../img/images/phones/phone2.jpg';
import P3 from '../img/images/phones/phone3.jpg';
import P4 from '../img/images/phones/phone4.jpg';
import P5 from '../img/images/phones/phone5.jpg';

import S1 from '../img/images/speakers/speaker1.jpg';
import S2 from '../img/images/speakers/speaker2.jpg';
import S3 from '../img/images/speakers/speaker3.jpg';
import S4 from '../img/images/speakers/speaker4.jpg';
import S5 from '../img/images/speakers/speaker5.jpg';
import S6 from '../img/images/speakers/speaker6.jpg';
import S7 from '../img/images/speakers/speaker7.jpg';

import T1 from '../img/images/tv/tv1.jpg';
import T2 from '../img/images/tv/tv2.jpg';
import T3 from '../img/images/tv/tv3.jpg';
import T4 from '../img/images/tv/tv4.jpg';
import T5 from '../img/images/tv/tv5.jpg';
import T6 from '../img/images/tv/tv6.jpg';

const SHOP_DATA = [{
        id: 1,
        title: 'Headphones',
        routeName: 'headphones',
        items: [{
                id: 1,
                name: 'Dre Beats',
                imageUrl: `${HP1} `,
                price: 225,
            },
            {
                id: 2,
                name: 'Beats by Dre',
                imageUrl: `${HP2} `,
                price: 338,
            },
            {
                id: 3,
                name: 'Prestige',
                imageUrl: `${HP3} `,
                price: 135,
            },
            {
                id: 4,
                name: 'Yell-Ow',
                imageUrl: `${HP4} `,
                price: 125,
            },
            {
                id: 5,
                name: 'Sony',
                imageUrl: `${HP5} `,
                price: 58,
            },
            {
                id: 6,
                name: 'Red Sony',
                imageUrl: `${HP6} `,
                price: 224,
            },
            {
                id: 7,
                name: 'Amazon',
                imageUrl: `${HP7} `,
                price: 108,
            },
            {
                id: 8,
                name: 'Grey',
                imageUrl: `${HP8} `,
                price: 494,
            },
            {
                id: 9,
                name: 'Air Pods',
                imageUrl: `${HP9} `,
                price: 16,
            },
        ],
    },
    {
        id: 2,
        title: 'Laptops',
        routeName: 'laptops',
        items: [{
                id: 10,
                name: 'Macbook',
                imageUrl: `${LP1}`,
                price: 11220,
            },
            {
                id: 11,
                name: 'Macbook pro',
                imageUrl: `${LP2}`,
                price: 12280,
            },
            {
                id: 12,
                name: 'Samsung',
                imageUrl: `${LP3}`,
                price: 710,
            },
            {
                id: 13,
                name: 'Dell',
                imageUrl: `${LP4}`,
                price: 560,
            },
            {
                id: 14,
                name: 'Lenovo',
                imageUrl: `${LP5}`,
                price: 460,
            },
            {
                id: 15,
                name: 'Acer',
                imageUrl: `${LP6}`,
                price: 360,
            },
            {
                id: 16,
                name: 'Google',
                imageUrl: `${LP7}`,
                price: 190,
            },
            {
                id: 17,
                name: 'HP',
                imageUrl: `${LP8}`,
                price: 200,
            },
        ],
    },
    {
        id: 3,
        title: 'Phones',
        routeName: 'Phones',
        items: [{
                id: 18,
                name: 'Iphne',
                imageUrl: `${P1} `,
                price: 125,
            },
            {
                id: 19,
                name: 'Iphone3 ',
                imageUrl: `${P2} `,
                price: 90,
            },
            {
                id: 20,
                name: 'Samsung',
                imageUrl: `${P3} `,
                price: 90,
            },
            {
                id: 21,
                name: 'Huwaie',
                imageUrl: `${P4} `,
                price: 165,
            },
            {
                id: 22,
                name: 'Nokia',
                imageUrl: `${P5} `,
                price: 185,
            },
        ],
    },
    {
        id: 4,
        title: 'speakers',
        routeName: 'speakers',
        items: [{
                id: 23,
                name: 'Grundig',
                imageUrl: `${S1} `,
                price: 25,
            },
            {
                id: 24,
                name: 'Provex',
                imageUrl: `${S2} `,
                price: 20,
            },
            {
                id: 25,
                name: 'Amazon',
                imageUrl: `${S3} `,
                price: 80,
            },
            {
                id: 26,
                name: 'Google',
                imageUrl: `${S4} `,
                price: 80,
            },
            {
                id: 27,
                name: 'Bose',
                imageUrl: `${S5} `,
                price: 45,
            },
            {
                id: 28,
                name: 'Bluapunkt',
                imageUrl: `${S6} `,
                price: 135,
            },
            {
                id: 29,
                name: 'Ramikic',
                imageUrl: `${S7} `,
                price: 20,
            },
        ],
    },
    {
        id: 5,
        title: 'Tv',
        routeName: 'tv',
        items: [{
                id: 30,
                name: 'Sony',
                imageUrl: `${T1} `,
                price: 1325,
            },
            {
                id: 31,
                name: 'Panasonic',
                imageUrl: `${T2} `,
                price: 920,
            },
            {
                id: 32,
                name: 'Samsung',
                imageUrl: `${T3} `,
                price: 2525,
            },
            {
                id: 33,
                name: 'LG',
                imageUrl: `${T4} `,
                price: 1125,
            },
            {
                id: 34,
                name: 'Sharp',
                imageUrl: `${T5} `,
                price: 840,
            },
            {
                id: 35,
                name: 'Radical',
                imageUrl: `${T6} `,
                price: 625,
            },
        ],
    },
];

export default SHOP_DATA;