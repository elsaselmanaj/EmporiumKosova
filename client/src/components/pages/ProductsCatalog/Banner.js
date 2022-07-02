import React from 'react'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import bg from '../../../assets/Banners/products-catalog-bg.webp'
import {FormattedMessage} from 'react-intl'


const Banner = () => {
  return (
    <div className='banner-container'>
        <SharedBanner 
        bg={bg}
        title={<FormattedMessage id='products-catalog-title' defaultMessage="PRODUCTS"/>}
        />
    </div>
  )
}

export default Banner