import React from "react";
import { FormattedMessage } from "react-intl";

import {MdLocationOn, MdPhone} from 'react-icons/md'
import {FiClock} from 'react-icons/fi'

import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn,  FaEnvelope} from 'react-icons/fa'

import visa from '../../../assets/footer/visa.png'
import mastercard from '../../../assets/footer/mastercard.png'
import paypal from '../../../assets/footer/paypal.png'
import discover from '../../../assets/footer/discover.png'
import bitcoin from '../../../assets/footer/bitcoin.png'
import amex from '../../../assets/footer/amex.png'


export const FooterData = [
    {
        category: <FormattedMessage id='footer-category1' defaultMessage='Shop'/>,
        links: [
            {
                link: <FormattedMessage id="footer-link1-1" defaultMessage="Shop"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link1-2" defaultMessage="Collections"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link1-3" defaultMessage="Outlet"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link1-4" defaultMessage="Lookbook"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link1-6" defaultMessage="Plans and Pricing"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link1-7" defaultMessage="Branding Design"/>,
                to: '/'
            },
        ]
    },
    {
        category: <FormattedMessage id='footer-category2' defaultMessage='Information'/>,
        links: [
            {
                link: <FormattedMessage id="footer-link2-1" defaultMessage="Products"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link2-2" defaultMessage="Collection"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link2-3" defaultMessage="About"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link2-4" defaultMessage="Contact"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link2-5" defaultMessage="Blog"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link2-6" defaultMessage="FAQs"/>,
                to: '/'
            }
        ]
    },
    {
        category: <FormattedMessage id='footer-category3' defaultMessage='Help'/>,
        links: [
            {
                link: <FormattedMessage id="footer-link3-1" defaultMessage="Shipping Services"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link3-2" defaultMessage="Payment Options"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link3-3" defaultMessage="Terms & Conditions"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link3-4" defaultMessage="Returns & Exchanges"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link3-5" defaultMessage="Shipping & Delivery"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link3-6" defaultMessage="Privacy Policy"/>,
                to: '/'
            }
        ]
    },
    {
        category: <FormattedMessage id='footer-category4' defaultMessage='Useful Links'/>,
        links: [
            {
                link: <FormattedMessage id="footer-link4-1" defaultMessage="Cart"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link4-2" defaultMessage="Woman Fashion"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link4-3" defaultMessage="Man Fashion"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link4-4" defaultMessage="My Account"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link4-5" defaultMessage="Wishlist"/>,
                to: '/'
            },
            {
                link: <FormattedMessage id="footer-link4-6" defaultMessage="Terms"/>,
                to: '/'
            }
        ]
    },
]

export const Info = [
    {
        category: <FormattedMessage id="footer-category5" defaultMessage="Exclusive Services"/>,
        infos: [
            {
                icon: <MdLocationOn />,
                info: "Prishtina,Kosovo"
            },
            {
                icon: <MdPhone/>,
                info: "+383 (49) 123 456"
            },
            {
                icon: <FiClock />,
                info: "All Week 24/7"
            },
            {
                icon: <FaEnvelope />,
                info: "emporium.kosova@gmail.com"
            }
        ]
    }
    
]


export const SocialMedias = [
    {
        cls: 'cls1',
        icon: <FaFacebookF />,
        to: '/'
    },
    {
        cls: 'cls2',
        icon: <FaTwitter />,
        to: '/'
    },
    {
        cls: 'cls3',
        icon: <FaInstagram />,
        to: '/'
    },
    {
        cls: 'cls4',
        icon: <FaYoutube />,
        to: '/'
    },
    {
        cls: 'cls5',
        icon: <FaLinkedinIn/>,
        to: '/'
    }
]

export const Cards = [
    {
        logo: visa,
    },
    {
        logo: mastercard,
    },
    {
        logo: paypal,
    },
    {
        logo: discover,
    },
    {
        logo: bitcoin,
    },
    {
        logo: amex,
    }
]