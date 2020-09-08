const INITIAL_STATE = {
    sections: [{
            url: `https://i.ibb.co/0FGPncF/HP2.jpg`,
            title: 'Headphones',
            width: '40%',
            id: 1,
            linkUrl: 'shop/headphones',
        },
        {
            url: `https://i.ibb.co/nMQSxSJ/LP1.jpg`,
            title: 'laptops',
            width: '20%',
            id: 2,
            linkUrl: 'shop/laptops',
        },
        {
            url: `https://i.ibb.co/W3Nm0rf/speaker11.jpg`,
            title: 'Speakers',
            width: '40%',
            id: 3,
            linkUrl: 'shop/speakers',
        },
        {
            url: `https://i.ibb.co/VBHhJg6/phone1.jpg`,
            title: 'phones',
            width: '25%',
            id: 4,
            linkUrl: 'shop/phones',
        },
        {
            url: 'https://i.ibb.co/RPxvqXb/tv2.jpg',
            title: 'smart tv',
            width: '35%',
            id: 5,
            linkUrl: 'shop/tv',
        },
        {
            url: `https://i.ibb.co/0Xx5N68/tv5.jpg`,
            title: 'and more',
            width: '40%',
            id: 6,
            linkUrl: 'shop/tv',
        },
    ],
};
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state;
    }
};
export default directoryReducer;