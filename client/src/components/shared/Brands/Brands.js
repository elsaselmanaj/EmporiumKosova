import React from 'react'
import './brands.scss'
import { FormattedMessage } from "react-intl";

import Zara from '../../../assets/brands/Zara-logo.webp'
import North from '../../../assets/brands/The-North-Face-logo.webp'
import Stradivarius from '../../../assets/brands/Stradivarius-logo.webp'
import Bershka from '../../../assets/brands/Bershka-logo.webp'

export const Data = [
    {
        logo: Zara
    },
    {
        logo: North
    },
    {
        logo: Stradivarius
    },
    {
        logo: Bershka
    },
    {
        logo: Zara
    },
    {
        logo: North
    },
    {
        logo: Stradivarius
    },
    {
        logo: Bershka
    },
    {
        logo: Zara
    },
    {
        logo: North
    },
    {
        logo: Stradivarius
    },
    {
        logo: Bershka
    },
    {
        logo: Zara
    },
    {
        logo: North
    },
    {
        logo: Stradivarius
    },
    {
        logo: Bershka
    },
    {
        logo: Zara
    },
    {
        logo: North
    }
]

const Brands = () => {
  return (
    <div className='brands-container'>

        <div className='logos-container'>

            <div className='inner-logos'>
                {Data.map((props) => {
                    return (
                        <div className='logo-container'>
                            <div className='logo' style={{content: `url(${props.logo})`}}></div>
                        </div>
                    )
                })}
            </div>
        </div>

    </div>
  )
}

export default Brands