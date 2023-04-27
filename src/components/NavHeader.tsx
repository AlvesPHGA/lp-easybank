import React from 'react';

import { NavLink } from 'react-router-dom';

const NavHeader = () => {
   return (
      <nav className="smallDevice:hidden smallDevice:flex-col smallDevice:w-[100vw] smallDevice:absolute smallDevice:top-[100px] smallDevice:h-[calc(100vh-100px)] smallDevice:left-0">
         <div className="smallDevice:bg-white smallDevice:w-[90%] smallDevice:h-[70vh] smallDevice:flex smallDevice:flex-col smallDevice:gap-1 smallDevice:justify-center smallDevice:mt-[1.25rem] smallDevice:mx-auto smallDevice:items-center smallDevice:rounded-lg">
            <NavLink
               to="/"
               end
               className="font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500 smallDevice:text-darkBlue [&.active]:text-darkBlue [&.active]:w-full [&.active]:h-1 [&.active]:left-0 [&.active]:after:bg-brightCyan"
            >
               Home
            </NavLink>
            <NavLink
               to="/about"
               className="m-8 font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500 smallDevice:text-darkBlue [&.active]:text-darkBlue [&.active]:w-full [&.active]:h-1 [&.active]:left-0 [&.active]:after:bg-brightCyan"
            >
               About
            </NavLink>
            <NavLink
               to="contact"
               className="font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500 smallDevice:text-darkBlue [&.active]:text-darkBlue [&.active]:w-full [&.active]:h-1 [&.active]:left-0 [&.active]:after:bg-brightCyan"
            >
               Contact
            </NavLink>
            <NavLink
               to="/blog"
               className="m-8 font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500 smallDevice:text-darkBlue [&.active]:text-darkBlue [&.active]:w-full [&.active]:h-1 [&.active]:left-0 [&.active]:after:bg-brightCyan"
            >
               Blog
            </NavLink>
            <NavLink
               to="careers"
               className="font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500 smallDevice:text-darkBlue [&.active]:text-darkBlue [&.active]:w-full [&.active]:h-1 [&.active]:left-0 [&.active]:after:bg-brightCyan"
            >
               Careers
            </NavLink>
         </div>
      </nav>
   );
};

export default NavHeader;
