import React from 'react';

const Button = () => {
   return (
      <button className="cta border-none px-9 py-3 rounded-3xl font-bold text-white hover:opacity-80 hover:duration-500 smallDevice:mx-auto smallDevice:block mediumDevice:mx-auto mediumDevice:block">
         Request Invite
      </button>
   );
};

export default Button;
