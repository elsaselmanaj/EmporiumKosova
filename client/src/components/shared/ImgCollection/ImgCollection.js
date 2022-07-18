import React from 'react'
import './imgCollection.scss'
import { Data } from './data'
import {Link} from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FormattedMessage } from 'react-intl';

const ImgCollection = () => {
  return (
    <div className='img-collection-container'>
        <div className='items'>
            {Data.map((props) => {
                return(
                    <div className={`item ${props.cls}`}>
                        <div className='img' style={{backgroundImage: `url(${props.image})`}}></div>
                        <div className='top-item'>
                                    <h6>{props.title}</h6>
                                    <div className='line'></div>
                                    <Link to='/ProductsCatalog' className='hover-button'><FormattedMessage id='img-collection-link' defaultMessage="Shop Now"/>  <MdOutlineKeyboardArrowRight /></Link>
                                </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ImgCollection