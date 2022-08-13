import React from 'react'
import './styles/topTotal.scss'
import {RiMoneyEuroCircleFill} from 'react-icons/ri'
import {FaBoxes} from 'react-icons/fa'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {FormattedMessage} from 'react-intl'

const TopTotal = (props) => {

    const { orders, products } = props;

    let totalSale = 0;

    if (orders) {
        orders.map((order) =>
          order.isPaid === true ? (totalSale = totalSale + order.totalPrice) : null
        );
    }
    
  return (
    <div className='top-total-container'>

        <div className='items'>
            <div className='item'>
                
                <div className='icon-container'>
                    <div className='icon'><RiMoneyEuroCircleFill /></div>
                </div>

                <div className='block'>
                    <h5><FormattedMessage id='dashboard-top-text1'/></h5>
                    <p>{totalSale.toFixed(0)} EUR</p>
                </div>
            </div>

            <div className='item'>
            <div className='icon-container'>
                    <div className='icon'><BsFillCartCheckFill /></div>
            </div>

                <div className='block'>
                    <h5><FormattedMessage id='dashboard-top-text2'/></h5>
                    {orders ? <p>{orders.length}</p> : <p>0</p>}
                </div>
            </div>

            <div className='item'>
            <div className='icon-container'>
                    <div className='icon'><FaBoxes /></div>
            </div>

                <div className='block'>
                <h5><FormattedMessage id='dashboard-top-text3'/></h5>
                    {products ? <p>{products.length}</p> : <p>0</p>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopTotal