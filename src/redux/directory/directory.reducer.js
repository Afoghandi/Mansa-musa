import Hp2 from '../../img/images/headphones/HP2.jpg';
import LP1 from '../../img/images/laptop/LP1.jpg';
import speaker1 from '../../img/images/speakers/speaker11.jpg';
import phone1 from '../../img/images/phones/phone1.jpg';
import Tv from '../../img/images/tv/tv1.jpg';
import More from '../../img/images/tv/tv5.jpg';

const INITIAL_STATE = {
    sections: [{
            url: `${Hp2}`,
            title: 'Headphones',
            width: '40%',
        },
        {
            url: `${LP1}`,
            title: 'laptops',
            width: '20%',
        },
        {
            url: `${speaker1}`,
            title: 'Speakers',
            width: '40%',
        },
        {
            url: `${phone1}`,
            title: 'phones',
            width: '25%',
        },
        {
            url: `${Tv}`,
            title: 'smart tv',
            width: '35%',
        },
        {
            url: `${More}`,
            title: 'and more',
            width: '40%',
        },
    ],
};
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state;
    }
};
export default directoryReducer;