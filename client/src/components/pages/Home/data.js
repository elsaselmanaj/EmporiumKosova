import {FormattedMessage} from 'react-intl'

import product1 from '../../../assets/home/product1.webp'
import product2 from '../../../assets/home/product2.webp'
import product3 from '../../../assets/home/product3.webp'

import icon1 from '../../../assets/home/icon1.webp'
import icon2 from '../../../assets/home/icon2.webp'
import icon3 from '../../../assets/home/icon3.webp'
import icon4 from '../../../assets/home/icon4.webp'

import img1 from '../../../assets/home/img1.webp'
import img2 from '../../../assets/home/img2.webp'
import img3 from '../../../assets/home/img3.webp'
import img4 from '../../../assets/home/img4.webp'
import img5 from '../../../assets/home/img5.webp'
import img6 from '../../../assets/home/img6.webp'

import {IoMdStar} from 'react-icons/io'


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

export const Data3 = [
    {
        image: img1,
        name: <FormattedMessage id='new-arrivals-name1' defaultMessage="Printed Satin Dress"/>,
        price: '29.95 EUR'
    },
    {
        image: img2,
        name: <FormattedMessage id='new-arrivals-name2' defaultMessage="Voluminous Sleeve Poplin Top"/>,
        price: '39.95 EUR'
    },
    {
        image: img3,
        name: <FormattedMessage id='new-arrivals-name3' defaultMessage="Ribbed Halter Top"/>,
        price: '9.95 EUR'
    },
    {
        image: img4,
        name: <FormattedMessage id='new-arrivals-name4' defaultMessage="High-Rise Straight Jeans"/>,
        price: '25.95 EUR'
    },
    {
        image: img5,
        name: <FormattedMessage id='new-arrivals-name5' defaultMessage="Linen Suit"/>,
        price: '99.90 EUR'
    },
    {
        image: img6,
        name: <FormattedMessage id='new-arrivals-name6' defaultMessage="Satin Corsetry-Inspired Top"/>,
        price: '22.95 EUR'
    }
]

export const sliderItems = [
    {
      id: 1,
      img: "https://i.ibb.co/XsdmR2c/1.png",
      title: "SUMMER SALE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "f5fafd",
    },
    {
      id: 2,
      img: "https://i.ibb.co/DG69bQ4/2.png",
      title: "AUTUMN COLLECTION",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fcf1ed",
    },
    {
      id: 3,
      img: "https://i.ibb.co/cXFnLLV/3.png",
      title: "LOUNGEWEAR LOVE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fbf0f4",
    },
  ];