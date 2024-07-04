import React from 'react'
import Slider from "react-slick";
import test1 from "../../assets/test/test1.ico" ;
import test2 from "../../assets/test/test2.ico";
import test3 from "../../assets/test/test3.ico"
const testimonialData = [
    {
      id: 1,
      name: "Dawit Haile - Director of Design Operations, Gondar",
      text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
      img: <img src={test1} alt="" className="block h-[300px] w-full
      sm:w-[200px] object-cover"/>,
    },
    {
      id: 1,
      name: "King of King - Director of Design Operations, Mak",
      text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
      img: <img src={test2} alt="" className="block h-[300px] w-full
      sm:w-[200px] object-cover"/>,
    },
    {
      id: 1,
      name: "Yordanos tadele - Director of Operations, Bahir Dar",
      text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
      img: <img src={test3} alt="" className="block h-[300px] w-full
      sm:w-[200px] object-cover"/>,
    },
  ];
const Testimonials = () => {
    const settings = {
        dots: true,
        arrows:false,
        infinite:true,
        speed:600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };
  return (
    <>
      <div className="py-10 dark:text-white">
        <div data-aos="fade-up"className="container">{/*testimonial section*/}
           <div className="grid grid-cols-1 max-w-screen-xl
           mx-auto gap-6">
            <Slider {...settings}>
                {testimonialData.map(({id,name,text,img}) => (
                    <div key={id} className="my-6">
                        <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                          {img}
                          <div className="space-y-3">
                            <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">{text}</p>
                            <h1 className="text-xl font-bold">{name}</h1>
                          </div> 
                          <p className=" text-[12rem] font-serif absolute bottom-0 right-0">,,</p>
                        </div>
                    </div>
                ))}
            </Slider>
           </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
