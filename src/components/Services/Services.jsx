import React from 'react'
import { FaCameraRetro } from 'react-icons/fa';
import { GiNotebook } from "react-icons/gi"
import { SlNote } from "react-icons/sl"


const skillsData = [
 { name: "App Development",
   icon: <FaCameraRetro className="text-4xl text-primary"/>,
   link: "#",
   description:
    "the very pain site will be achieved by the elite coaching. No fear of euismod or salad to drink, a drink just for a while but even a bed"
    ,
    aosDelay: "0",
  },
  { name: "Web Designing",
    icon: <GiNotebook className="text-4xl text-primary"/>,
    link: "#",
    description:
     "the very pain site will be achieved by the elite coaching. No fear of euismod or salad to drink, a drink just for a while but even a bed"
     ,
     aosDelay: "300",
   },
   { name: "Graphic Designining",
    icon: <SlNote className="text-4xl text-primary"/>,
    link: "#",
    description:
     "the very pain site will be achieved by the elite coaching. No fear of euismod or salad to drink, a drink just for a while but even a bed"
     ,
     aosDelay: "500",
   },
   { name: "Digital Marketing",
    icon: <SlNote className="text-4xl text-primary"/>,
    link: "#",
    description:
     "the very pain site will be achieved by the elite coaching. No fear of euismod or salad to drink, a drink just for a while but even a bed"
     ,
     aosDelay: "700",
   },
];
const Services = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-black dark:text-white
      py-12 sm:grid sm:place-items-center">
        <div className="container" >
            {/**header section */}
            <div className="pb-12 text-center space-y-3">
                <h1 data-aos="fade-up" className="text-3xl font-semibold 
                text-violet-950 dark:text-primary">Explore Our Service</h1>
                <p data-aos="fade-up" data-aos-delay="300">
                    We are self-service data analytics softeware that
                    lets you create
                    visually
                </p>
            </div>
              {/**card section */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {
                  skillsData.map((skill) => (
                   <div
                   data-aos="fade-up" 
                   data-aos-delay={skill.aosDelay}
                    key={skill.name} className="card space-y-3 sm:space-y-4 p-4">
                     <div>{skill.icon}</div>
                     <h1 className="text-lg font-semibold">{skill.name}</h1>
                     <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
                   </div>
                  ))}
              </div>
              {/**button section */}
             <div data-aos="fade-up"
              data-aos-delay="900"
              data-aos-offset="0"
              className= "text-center mt-4 sm:mt-8">
              <button className="btn-primary">Learn More</button>
             </div>
        </div>
      </div>
    </>
  )
}

export default Services