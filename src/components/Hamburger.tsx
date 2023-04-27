import React from 'react';

const Hamburger = () => {
   return (
      <button className="w-[50px] h-8 border rounded px-1">
         <span className="relative w-full h-1 rounded bg-darkBlue block before:absolute before:w-full before:h-1 before:bg-darkBlue before:border before:left-0 before:bottom-[6px] before:rounded after:absolute after:w-full after:h-1 after:bg-darkBlue after:border after:left-0 after:top-[6px] after:rounded"></span>
      </button>
   );
};

export default Hamburger;
