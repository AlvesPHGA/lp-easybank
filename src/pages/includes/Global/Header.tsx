import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import logoLP from '../../../assets/svg/logo.svg';
import Button from '../../../components/Button';

const Header = () => {
   const [active, setActive] = React.useState(false);

   const { pathname } = useLocation();

   React.useEffect(() => {
      setActive(false);
   }, [pathname]);

   return (
      <header className="h-24 flex bg-white relative z-[100] smallDevice:fixed smallDevice:w-[100vw] smallDevice:top-0 smallDevice:h-[100px] mediumDevice:fixed mediumDevice:w-[100vw] mediumDevice:top-0 mediumDevice:h-[100px] largerDevice:w-[100vw] largerDevice:fixed largerDevice:top-0 largerDevice:h-[100px]">
         <div className="w-1200 m-auto flex justify-between items-center smallDevice:w-full smallDevice:px-4 mediumDevice:w-full mediumDevice:px-4 largerDevice:w-full ">
            <div className="flex h-7">
               <img className="cursor-pointer" src={logoLP} alt="Logo site" />
            </div>

            <button
               aria-label="Menu"
               onClick={() => setActive(!active)}
               id="hamburger"
               className={`hidden hamburger-open w-[50px] h-8 rounded px-1 smallDevice:block  mediumDevice:block largerDevice:block ${
                  active ? 'active-menu' : ''
               }`}
            >
               <span className="open block relative w-full h-1 rounded bg-darkBlue  before:absolute before:w-full before:h-1 before:bg-darkBlue before:border before:left-0 before:bottom-[6px] before:rounded after:absolute after:w-full after:h-1 after:bg-darkBlue after:border after:left-0 after:top-[6px] after:rounded"></span>
            </button>

            <nav
               className={`smallDevice:navMobile smallDevice:hidden smallDevice:flex-col smallDevice:w-[100vw] smallDevice:absolute smallDevice:top-[100px] smallDevice:h-[calc(100vh-100px)] smallDevice:left-0 mediumDevice:navMobile mediumDevice:hidden mediumDevice:flex-col mediumDevice:w-[100vw] mediumDevice:absolute mediumDevice:top-[100px] mediumDevice:h-[calc(100vh-100px)] mediumDevice:left-0 largerDevice:navMobile largerDevice:hidden largerDevice:flex-col largerDevice:w-[100vw] largerDevice:absolute largerDevice:top-[100px] largerDevice:h-[calc(100vh-100px)] largerDevice:left-0 ${
                  active && 'openMenu'
               }`}
            >
               <div className="between smallDevice:bg-white smallDevice:w-[90%] smallDevice:h-[70vh] smallDevice:flex smallDevice:flex-col smallDevice:gap-1 smallDevice:justify-center smallDevice:mt-[1.25rem] smallDevice:mx-auto smallDevice:items-center smallDevice:rounded-lg mediumDevice:bg-white mediumDevice:w-[90%] mediumDevice:h-[40vh] mediumDevice:flex mediumDevice:flex-col mediumDevice:justify-center mediumDevice:mt-[1.25rem] mediumDevice:mx-auto mediumDevice:items-center mediumDevice:rounded-lg largerDevice:bg-white largerDevice:w-[90%] largerDevice:h-[40vh] largerDevice:flex largerDevice:flex-col largerDevice:justify-center largerDevice:mt-[1.25rem] largerDevice:mx-auto largerDevice:items-center largerDevice:rounded-lg">
                  <NavLink
                     to="/"
                     end
                     className="font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500 [&.active]:w-full [&.active]:h-1 [&.active]:after:bg-brightCyan [&.active]:text-darkBlue smallDevice:text-darkBlue smallDevice:block smallDevice:text-center smallDevice:relative smallDevice:after:content-none mediumDevice:text-darkBlue mediumDevice:block mediumDevice:text-center mediumDevice:relative mediumDevice:after:content-none largerDevice:text-darkBlue largerDevice:block largerDevice:text-center largerDevice:relative largerDevice:after:content-none"
                  >
                     Home
                  </NavLink>
                  <NavLink
                     to="/about"
                     className="m-8 font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500 [&.active]:text-darkBlue [&.active]:w-full [&.active]:h-1 [&.active]:after:bg-brightCyan smallDevice:text-darkBlue smallDevice:text-center smallDevice:relative smallDevice:after:content-none mediumDevice:text-darkBlue mediumDevice:text-center mediumDevice:relative mediumDevice:after:content-none mediumDevice:my-5 largerDevice:text-darkBlue largerDevice:text-center largerDevice:relative largerDevice:after:content-none largerDevice:my-5"
                  >
                     About
                  </NavLink>
                  <NavLink
                     to="contact"
                     className="font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500 [&.active]:text-darkBlue [&.active]:w-full [&.active]:h-1 [&.active]:after:bg-brightCyan smallDevice:text-darkBlue smallDevice:text-center smallDevice:relative smallDevice:after:content-none mediumDevice:text-darkBlue mediumDevice:text-center mediumDevice:relative mediumDevice:after:content-none largerDevice:text-darkBlue largerDevice:text-center largerDevice:relative largerDevice:after:content-none"
                  >
                     Contact
                  </NavLink>
                  <NavLink
                     to="/blog"
                     className="m-8 font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500 [&.active]:text-darkBlue [&.active]:w-full [&.active]:h-1 [&.active]:after:bg-brightCyan smallDevice:text-darkBlue smallDevice:text-center smallDevice:relative smallDevice:after:content-none mediumDevice:text-darkBlue mediumDevice:text-center mediumDevice:relative mediumDevice:after:content-none mediumDevice:my-5 largerDevice:text-darkBlue largerDevice:text-center largerDevice:relative largerDevice:after:content-none largerDevice:my-5"
                  >
                     Blog
                  </NavLink>
                  <NavLink
                     to="careers"
                     className="font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500 [&.active]:text-darkBlue [&.active]:w-full [&.active]:h-1 [&.active]:after:bg-brightCyan smallDevice:text-darkBlue smallDevice:text-center smallDevice:relative smallDevice:after:content-none mediumDevice:text-darkBlue mediumDevice:text-center mediumDevice:relative mediumDevice:after:content-none largerDevice:text-darkBlue largerDevice:text-center largerDevice:relative largerDevice:after:content-none"
                  >
                     Careers
                  </NavLink>
               </div>
            </nav>

            <div className="smallDevice:hidden mediumDevice:hidden largerDevice:hidden">
               <Button />
            </div>
         </div>
      </header>
   );
};

export default Header;
