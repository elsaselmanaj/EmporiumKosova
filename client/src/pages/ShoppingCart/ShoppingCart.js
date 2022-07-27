import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/ShoppingCart/Banner'
import Cart from '../../components/pages/ShoppingCart/Cart'
import Newsettler from '../../components/shared/Newsettler/Newsettler'
import Footer from '../../components/shared/Footer/Footer'


const ShoppingCart = () => {
    return (
        <div className='shopping-cart-page'>
            <Navbar />
            <Banner />
            <Cart />
            <Newsettler />
            <Footer />
        </div>
    )
}

export default ShoppingCart;