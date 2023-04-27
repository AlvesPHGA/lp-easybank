import React from 'react';

const Hamburger = () => {
   return (
      <button
         aria-label="Menu"
         className="hidden w-[50px] h-8 rounded px-1 smallDevice:block"
      >
         <span className="relative w-full h-1 rounded bg-darkBlue block [&.active]:bg-transparent before:absolute before:w-full before:h-1 before:bg-darkBlue before:border before:left-0 before:bottom-[6px] before:rounded before:[&.active]:rotate-45 before:[&.active]:top-0 after:absolute after:w-full after:h-1 after:bg-darkBlue after:border after:left-0 after:top-[6px] after:rounded after:[&.active]:rotate-[130deg] after:[&.active]:top-0"></span>
      </button>
   );
};

export default Hamburger;
