import React from 'react';

const NavHeader = () => {
   return (
      <nav className="border smallDevice:hidden smallDevice:flex-col smallDevice:bg-white smallDevice:w-[100vw] smallDevice:absolute smallDevice:top-[100px] smallDevice:h-[90vh] smallDevice:left-0">
         <a
            className="font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500"
            href=""
         >
            Home
         </a>
         <a
            className="m-8 font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500"
            href=""
         >
            About
         </a>
         <a
            className="font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500"
            href=""
         >
            Contact
         </a>
         <a
            className="m-8 font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500"
            href=""
         >
            Blog
         </a>
         <a
            className="font-publicSans text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500"
            href=""
         >
            Careers
         </a>
      </nav>
   );
};

export default NavHeader;
