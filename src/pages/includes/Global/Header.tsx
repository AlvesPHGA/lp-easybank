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
      <header className="h-24 flex bg-white relative z-[100] smallDevice:fixed smallDevice:w-[100vw] smallDevice:top-0 smallDevice:h-[100px]">
         <div className="w-1200 m-auto flex justify-between items-center smallDevice:w-full smallDevice:px-4">
            <div className="flex h-7">
               <img className="cursor-pointer" src={logoLP} alt="Logo site" />
            </div>

            <button
               aria-label="Menu"
               onClick={() => setActive(!active)}
               id="hamburger"
               className={`hidden hamburger-open w-[50px] h-8 rounded px-1 smallDevice:block  ${
                  active ? 'active-menu' : ''
               }`}
            >
               <span className="open block relative w-full h-1 rounded bg-darkBlue  before:absolute before:w-full before:h-1 before:bg-darkBlue before:border before:left-0 before:bottom-[6px] before:rounded after:absolute after:w-full after:h-1 after:bg-darkBlue after:border after:left-0 after:top-[6px] after:rounded"></span>
            </button>

            <nav
               className={`smallDevice:navMobile smallDevice:hidden smallDevice:flex-col smallDevice:w-[100vw] smallDevice:absolute smallDevice:top-[100px] smallDevice:h-[calc(100vh-100px)] smallDevice:left-0 ${
                  active && 'openMenu'
               }`}
            >
               <div className="between smallDevice:bg-white smallDevice:w-[90%] smallDevice:h-[70vh] smallDevice:flex smallDevice:flex-col smallDevice:gap-1 smallDevice:justify-center smallDevice:mt-[1.25rem] smallDevice:mx-auto smallDevice:items-center smallDevice:rounded-lg">
                  <NavLink
                     to="/"
                     end
                     className="font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500 [&.active]:w-full [&.active]:h-1 [&.active]:after:bg-brightCyan [&.active]:text-darkBlue smallDevice:text-darkBlue smallDevice:block smallDevice:text-center smallDevice:relative smallDevice:after:content-none"
                  >
                     Home
                  </NavLink>
                  <NavLink
                     to="/about"
                     className="m-8 font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500 [&.active]:text-darkBlue [&.active]:w-full [&.active]:h-1 [&.active]:after:bg-brightCyan smallDevice:text-darkBlue smallDevice:text-center smallDevice:relative smallDevice:after:content-none"
                  >
                     About
                  </NavLink>
                  <NavLink
                     to="contact"
                     className="font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500 [&.active]:text-darkBlue [&.active]:w-full [&.active]:h-1 [&.active]:after:bg-brightCyan smallDevice:text-darkBlue smallDevice:text-center smallDevice:relative smallDevice:after:content-none"
                  >
                     Contact
                  </NavLink>
                  <NavLink
                     to="/blog"
                     className="m-8 font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500 [&.active]:text-darkBlue [&.active]:w-full [&.active]:h-1 [&.active]:after:bg-brightCyan smallDevice:text-darkBlue smallDevice:text-center smallDevice:relative smallDevice:after:content-none"
                  >
                     Blog
                  </NavLink>
                  <NavLink
                     to="careers"
                     className="font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500 [&.active]:text-darkBlue [&.active]:w-full [&.active]:h-1 [&.active]:after:bg-brightCyan smallDevice:text-darkBlue smallDevice:text-center smallDevice:relative smallDevice:after:content-none"
                  >
                     Careers
                  </NavLink>
               </div>
            </nav>

            <div className="smallDevice:hidden">
               <Button />
            </div>
         </div>
      </header>
   );
};

export default Header;
