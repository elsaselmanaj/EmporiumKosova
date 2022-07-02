import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/ShoppingCart/Banner'
import Footer from '../../components/shared/Footer/Footer'


const ShoppingCart = () => {
    return (
        <div className='shopping-cart-page'>
            <Navbar />
            <Banner />
            <Footer />
        </div>
    )
}

export default ShoppingCart;