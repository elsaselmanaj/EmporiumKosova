import React from 'react'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import bg from '../../../assets/Banners/contact-us-bg.webp'
import {FormattedMessage} from 'react-intl'


const Banner = () => {
  return (
    <div className='banner-container'>
        <SharedBanner 
        bg={bg}
        title={<FormattedMessage id='contact-us-title' defaultMessage="CONTACT US"/>}
        />
    </div>
  )
}

export default Banner