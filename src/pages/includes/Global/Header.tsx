import React from 'react';

import logoLP from '../../../assets/svg/logo.svg';
import NavHeader from '../../../components/NavHeader';
import Button from '../../..//components/Button';

const Header = () => {
   return (
      <header className="h-24 flex bg-white">
         <div className="w-1200 m-auto flex justify-between items-center">
            <div className="flex h-7">
               <img className="cursor-pointer" src={logoLP} alt="Logo site" />
            </div>
            <NavHeader />
            <Button />
         </div>
      </header>
   );
};

export default Header;
