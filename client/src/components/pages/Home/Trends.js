import React from 'react'
import './styles/trends.scss'
import {FormattedMessage} from 'react-intl'

const Trends = () => {
  return (
    <div className='trends-container'>

        <div className='trends-text'>
            <h1 className='year'>2022</h1>
            <h1 className='title'><FormattedMessage id='trends-title' defaultMessage="FASHION TRENDS"/></h1>
            <p className='text'><FormattedMessage id='trends-text' defaultMessage="SPECIAL OFFER"/></p>

            <div className='circle c1'></div>
            <div className='circle c2'></div>
        </div>

    </div>
  )
}

export default Trends