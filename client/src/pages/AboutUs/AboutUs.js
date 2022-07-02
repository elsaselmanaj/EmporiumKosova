import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/AboutUs/Banner'
import AboutText from '../../components/pages/AboutUs/AboutText'
import ShoppingExperience from '../../components/pages/AboutUs/ShoppingExperience'
import ImgCollection from '../../components/shared/ImgCollection/ImgCollection'
import Present from '../../components/pages/AboutUs/Present'
import Brands from '../../components/shared/Brands/Brands'
import Feedback from '../../components/shared/Feedback/Feedback'
import Newsettler from '../../components/shared/Newsettler/Newsettler'
import Footer from '../../components/shared/Footer/Footer'


const AboutUs = () => {
    return (
        <div className='about-us-page'>
            <Navbar />
            <Banner />
            <AboutText />
            <ShoppingExperience />
            <ImgCollection />
            <Present />
            <Brands />
            <Feedback />
            <Newsettler />
            <Footer />
        </div>
    )
}

export default AboutUs;