import React from 'react';

import logoLP from '../../../assets/svg/logo.svg';
import NavHeader from '../../../components/NavHeader';
import Button from '../../../components/Button';
import Hamburger from '../../../components/Hamburger';

const Header = () => {
   const [active, setActive] = React.useState(false);

   return (
      <header className="h-24 flex bg-white relative z-[100] smallDevice:fixed smallDevice:w-[100vw] smallDevice:top-0 smallDevice:h-[100px]">
         <div className="w-1200 m-auto flex justify-between items-center smallDevice:w-full smallDevice:px-4">
            <div className="flex h-7">
               <img className="cursor-pointer" src={logoLP} alt="Logo site" />
            </div>
            <Hamburger />
            <NavHeader />
            <div className="smallDevice:hidden">
               <Button />
            </div>
         </div>
      </header>
   );
};

export default Header;
