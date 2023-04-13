import React from 'react';

const NavHeader = () => {
   return (
      <nav>
         <a
            className="font-bold text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500"
            href=""
         >
            Home
         </a>
         <a
            className="m-8 font-bold text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500"
            href=""
         >
            About
         </a>
         <a
            className="font-bold text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500"
            href=""
         >
            Contact
         </a>
         <a
            className="m-8 font-bold text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500"
            href=""
         >
            Blog
         </a>
         <a
            className="font-bold text-grayishBlue relative hover:text-darkBlue after:absolute  after:transparent after:w-full after:h-1 after:left-0 after:top-52 hover:after:bg-brightCyan hover:duration-500"
            href=""
         >
            Careers
         </a>
      </nav>
   );
};

export default NavHeader;
