import React from 'react'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import bg from '../../../assets/Banners/blog-bg.webp'
import {FormattedMessage} from 'react-intl'


const Banner = () => {
  return (
    <div className='banner-container'>
        <SharedBanner 
        bg={bg}
        title={<FormattedMessage id='blog-title' defaultMessage="BLOG"/>}
        />
    </div>
  )
}

export default Banner;