import React from 'react';
import Button from '../../../../components/Button';

import imgMockups from '../../../../assets/images/image-mockups.png';

const Subheader = () => {
   return (
      <section className="w-1200">
         <div>
            <h1>Next generation digital banking</h1>
            <p>
               Take your financial life online. Your Easybank account will be a
               one-stop for spending, saving, budgeting, investing, and much
               more.
            </p>
            <Button />
         </div>
         <div>
            <div>
               <img src={imgMockups} alt="Images devices" />
            </div>
         </div>
      </section>
   );
};

export default Subheader;
