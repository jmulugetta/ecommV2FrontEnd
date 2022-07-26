import React from 'react'
import AboutUs from '../components/AboutUs'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Contact from '../components/Contact'
import FilterList from '../components/FilterList'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Products from '../components/Products'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>
        <Announcement/>
        <NavBar/>
        <Slider/>
        <AboutUs/>
        <Categories/>
        <FilterList/>
        <Products/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home;