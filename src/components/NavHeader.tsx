import React from 'react';

const NavHeader = () => {
   return (
      <nav className="border smallDevice:flex smallDevice:flex-col smallDevice:w-[100vw] smallDevice:absolute smallDevice:top-[100px] smallDevice:h-[90vh] smallDevice:left-0">
         <div className="smallDevice:bg-white smallDevice:w-[90%] smallDevice:h-[70vh] smallDevice:flex smallDevice:flex-col smallDevice:gap-3 smallDevice:justify-center smallDevice:mt-[1.25rem] smallDevice:mx-auto smallDevice:items-center smallDevice:border">
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
         </div>
      </nav>
   );
};

export default NavHeader;
