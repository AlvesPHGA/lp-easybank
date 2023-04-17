import React from 'react';
import { dataCardChooseEasybank } from './dataCards';
import Card from './Card';

const ChooseEasybank = () => {
   return (
      <section className="py-28 bg-lightGrayishBlue">
         <div className="w-1200 m-auto">
            <h2 className="text-darkBlue">Why choose Easybank?</h2>
            <p className="text-grayishBlue w-[690px] mt-6 mb-16">
               We leverage Open Banking to turn your bank account into your
               financial hub. Control your finances like never before.
            </p>

            <div className="flex gap-4 justify-between">
               {dataCardChooseEasybank.map((dt) => (
                  <Card key={dt.id} {...dt} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default ChooseEasybank;
