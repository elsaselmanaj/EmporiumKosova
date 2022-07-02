import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/ContactUs/Banner'
import Questions from '../../components/pages/ContactUs/Questions'
import Map from '../../components/pages/ContactUs/Map'
import Newsettler from '../../components/shared/Newsettler/Newsettler'
import Footer from '../../components/shared/Footer/Footer'


const ContactUs = () => {
    return (
        <div className='contact-us-page'>
            <Navbar />
            <Banner />
            <Questions />
            <Map />
            <Newsettler />
            <Footer />
        </div>
    )
}

export default ContactUs;