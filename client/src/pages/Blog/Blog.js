import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Blog/Banner'
import Articles from '../../components/pages/Blog/Articles';
import PopularArticles from '../../components/pages/Blog/PopularArticles';
import InstaPosts from '../../components/pages/Blog/InstaPosts';
import Feedback from "../../components/shared/Feedback/Feedback";
import Newsettler from '../../components/shared/Newsettler/Newsettler'
import Footer from '../../components/shared/Footer/Footer'


const Blog = () => {
    return (
        <div className='blog-page'>
            <Navbar />
            <Banner />
            <Articles />
            <PopularArticles />
            <InstaPosts />
            <Feedback />
            <Newsettler />
            <Footer />
        </div>
    )
}

export default Blog;