import React from 'react';

const Subheader = ({ title }: { title: string }) => {
   return (
      <section className="py-10 bg-lightGrayishBlue">
         <div className="w-1200 mx-auto">
            <h1 className="text-center">{title}</h1>
         </div>
      </section>
   );
};

export default Subheader;
