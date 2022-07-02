import React from 'react'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import bg from '../../../assets/Banners/shopping-cart-bg.webp'
import {FormattedMessage} from 'react-intl'


const Banner = () => {
  return (
    <div className='banner-container'>
        <SharedBanner 
        bg={bg}
        title={<FormattedMessage id='shopping-cart-title' defaultMessage="SHOPPING CART"/>}
        />
    </div>
  )
}

export default Banner;