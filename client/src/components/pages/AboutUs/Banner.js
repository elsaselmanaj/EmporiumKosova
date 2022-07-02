import React from 'react'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import bg from '../../../assets/Banners/about-us-bg.webp'
import {FormattedMessage} from 'react-intl'


const Banner = () => {
  return (
    <div className='banner-container'>
        <SharedBanner 
        bg={bg}
        title={<FormattedMessage id='about-us-title' defaultMessage="ABOUT"/>}
        />
    </div>
  )
}

export default Banner