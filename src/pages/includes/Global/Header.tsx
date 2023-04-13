import React from 'react';

import logoLP from '../../../assets/svg/logo.svg';

const Header = () => {
   return (
      <header className="h-24 border flex">
         <div className="w-1200 border m-auto flex justify-between items-center">
            <div className="flex h-7">
               <img className="cursor-pointer" src={logoLP} alt="Logo site" />
            </div>
            <nav>
               <a
                  className="font-bold text-grayishBlue hover:text-darkBlue hover:duration-500"
                  href=""
               >
                  Home
               </a>
               <a
                  className="m-8 font-bold text-grayishBlue hover:text-darkBlue hover:duration-500"
                  href=""
               >
                  About
               </a>
               <a
                  className="font-bold text-grayishBlue hover:text-darkBlue hover:duration-500"
                  href=""
               >
                  Contact
               </a>
               <a
                  className="m-8 font-bold text-grayishBlue hover:text-darkBlue hover:duration-500"
                  href=""
               >
                  Blog
               </a>
               <a
                  className="font-bold text-grayishBlue hover:text-darkBlue hover:duration-500"
                  href=""
               >
                  Careers
               </a>
            </nav>
            <button>Request Invite</button>
         </div>
      </header>
   );
};

export default Header;
