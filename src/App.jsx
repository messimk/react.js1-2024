import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandLogo from './components/BrandLogo/BrandLogo';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import BlogsComp from './components/BlogsComp/BlogsComp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer';
import AOS from "aos"
import "aos/dist/aos.css";
const App = () => {
  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-out",
        offset: 100,
        delay:100,
      })
      AOS.refresh();
  },[])
  return (
    <div className="overflow-x-hidden dark:bg-black duration-300">
       <Navbar/>
       <Hero/>
       <BrandLogo/>
       <Services/>
       <Testimonials/>
       <BlogsComp/>
       <Footer/>
    </div>
  )
}

export default App