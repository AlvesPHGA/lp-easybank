import React from 'react';

const Hamburger = () => {
   return (
      <div className="hamburger hidden relative top-[50%] translate-y-[-50%] w-12 h-[2.5px] rounded bg-darkBlue active:bg-transparent after:absolute after:bg-darkBlue after:h-[2.5px] after:w-12 after:top-[5px] after:rounded before:absolute before:bg-darkBlue before:h-[2.5px] before:bottom-[5px] before:w-12 before:rounded smallDevice:block after:active:rotate-[45deg] after:active:top-[-3px] before:active:top-[-3px] before:active:rotate-[135px]"></div>
   );
};

export default Hamburger;
