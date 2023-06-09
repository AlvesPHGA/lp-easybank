import React from 'react';
import { dataCardChooseEasybank } from './dataCards';
import Card from './Card';

const ChooseEasybank = () => {
   return (
      <section className="py-28 bg-lightGrayishBlue smallDevice:py-10 mediumDevice:py-10 largerDevice:py-12">
         <div className="w-1200 m-auto smallDevice:w-full smallDevice:px-4 mediumDevice:w-full mediumDevice:px-4 largerDevice:px-5 largerDevice:w-full">
            <h2 className="text-darkBlue smallDevice:text-4xl smallDevice:text-center mediumDevice:text-4xl mediumDevice:text-center largerDevice:text-4xl largerDevice:text-center">
               Why choose Easybank?
            </h2>
            <p className="text-grayishBlue w-[690px] mt-6 mb-16 smallDevice:w-full smallDevice:text-base smallDevice:text-center smallDevice:mb-10 mediumDevice:w-full mediumDevice:text-base mediumDevice:text-center mediumDevice:mb-10 largerDevice:w-full largerDevice:text-center largerDevice:mb-11">
               We leverage Open Banking to turn your bank account into your
               financial hub. Control your finances like never before.
            </p>

            <div className="flex gap-4 justify-between smallDevice:flex-col smallDevice:gap-8 smallDevice:items-center mediumDevice:flex-col mediumDevice:gap-8 mediumDevice:items-center largerDevice:flex-col largerDevice:gap-10 largerDevice:items-center">
               {dataCardChooseEasybank.map((dt) => (
                  <Card key={dt.id} {...dt} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default ChooseEasybank;
