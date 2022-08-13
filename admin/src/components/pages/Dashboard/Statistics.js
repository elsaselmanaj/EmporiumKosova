import React from 'react'
import './styles/statistics.scss'
import {FormattedMessage} from 'react-intl'

const Statistics = () => {
  return (
    <div className='statistics-container'>
        <div className='items'>
           <div className='item item1'>
            <h3><FormattedMessage id='dashboard-statistic-title1'/></h3>
            <div className='img img1'></div>
           </div>

           <div className='item item2'>
           <h3><FormattedMessage id='dashboard-statistic-title2'/></h3>
            <div className='img img2'></div>
           </div>
        </div>
    </div>
  )
}

export default Statistics