import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/ShoppingCart/Banner'
import Newsettler from '../../components/shared/Newsettler/Newsettler'
import Footer from '../../components/shared/Footer/Footer'


const ShoppingCart = () => {
    return (
        <div className='shopping-cart-page'>
            <Navbar />
            <Banner />
            <Newsettler />
            <Footer />
        </div>
    )
}

export default ShoppingCart;