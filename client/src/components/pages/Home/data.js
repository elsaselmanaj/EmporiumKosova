import {FormattedMessage} from 'react-intl'

import product1 from '../../../assets/home/product1.webp'
import product2 from '../../../assets/home/product2.webp'
import product3 from '../../../assets/home/product3.webp'

import icon1 from '../../../assets/home/icon1.webp'
import icon2 from '../../../assets/home/icon2.webp'
import icon3 from '../../../assets/home/icon3.webp'
import icon4 from '../../../assets/home/icon4.webp'


export const Data1 = [
    {
        image: product1,
        text: (<FormattedMessage id='trending-product-text1' defaultMessage="Your wardrobe is not the same without a blazer!"/>)
    },
    {
        image: product2,
        text: (<FormattedMessage id='trending-product-text2' defaultMessage="With 'Blue Jeans,White Shirt' you can never go wrong!"/>)
    },
    {
        image: product3,
        text: (<FormattedMessage id='trending-product-text3' defaultMessage="Choose one of our best dresses and then dress it to impress!"/>)
    },
    {
        image: product1,
        text: (<FormattedMessage id='trending-product-text1' defaultMessage="Your wardrobe is not the same without a blazer!"/>)
    },
    {
        image: product2,
        text: (<FormattedMessage id='trending-product-text2' defaultMessage="With 'Blue Jeans,White Shirt' you can never go wrong!"/>)
    },
    {
        image: product3,
        text: (<FormattedMessage id='trending-product-text3' defaultMessage="Choose one of our best dresses and then dress it to impress!"/>)
    }
]

export const Data2 = [
    {
        icon: icon1,
        title: (<FormattedMessage id='info-title1' defaultMessage="FREE DELIVERY"/>),
        text: (<FormattedMessage id='info-text1' defaultMessage="Free Shipping World Wide"/>)
    },
    {
        icon: icon2,
        title: (<FormattedMessage id='info-title2' defaultMessage="30 DAYS RETURN"/>),
        text: (<FormattedMessage id='info-text2' defaultMessage="Return product within 30 days"/>)
    },
    {
        icon: icon3,
        title: (<FormattedMessage id='info-title3' defaultMessage="SECURE PAYMENT"/>),
        text: (<FormattedMessage id='info-text3' defaultMessage="Secure Payment Method"/>)
    },
    {
        icon: icon4,
        title: (<FormattedMessage id='info-title4' defaultMessage="HELP CENTER"/>),
        text: (<FormattedMessage id='info-text4' defaultMessage="24/7 Support System"/>)
    }
]