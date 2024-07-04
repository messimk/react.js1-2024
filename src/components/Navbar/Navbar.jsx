import React from 'react'
import Logo from "../../assets/website/Vector.png";
import DarkMode from '../DarkMode';
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from '../ResponsiveMenu';


export const MenuLinks = [
  {
    id: 1,
    name: "About",
    link: "/#about"
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "Project",
    link: "/#project",
  },
]
const Navbar = () => {
  const [ showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <>
    <nav className="bg-white dark:bg-black dark:text-white
     duration-400">
      <div className="container py-3 md:py-2">
         <div className="flex justify-between items-center">
          {/**logo section */}
          <div>
          <a href="#" className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="w-5"/>
          <span className="text-2xl sm:text-3xl font-semibold">
            Digital Agency
            </span>
            </a>
          </div>
            {/**Desktop Navlinks section */}
            <div className="hidden md:block">
               <ul className="flex items-center gap-8"> 
                {
                 MenuLinks.map(({id,name,link}) => {
                  return (
                    <li key={id} className="cursor-pointer py-4">
                      <a href="#"
                      className="text-lg font-medium
                      hover:text-primary py-2
                      hover:border-b-2
                      hover:border-primary transition-all
                      duration-300"
                      
                      >{name}</a>
                    </li>
                  );
                 }) 
                }
                <button className="btn-primary">Get in Touch</button>
                   <DarkMode />
               </ul>
            </div>
            {/**Mobile view  */}
            <div className="flex item-center gap-4 md:hidden" >
              <DarkMode/>
              {
                showMenu? (
                  <HiMenuAlt1 
                onClick={toggleMenu}
              className=" cursor-pointer text-2xl"/>

                ):(
                  <HiMenuAlt3
                  onClick={toggleMenu} 
               className=" cursor-pointer text-2xl"/>
                )
              }
            </div>
         </div>
      </div>
      {/*Mobile menu section */}
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
    </>
  )
}

export default Navbar
