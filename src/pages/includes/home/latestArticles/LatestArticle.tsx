import React from 'react';
import { dataContentCard } from './dataCardLatestArticles';
import Card from './Card';

const LatestArticle = () => {
   return (
      <section className="bg-veryLightGray py-28 smallDevice:py-10 mediumDevice:py-10">
         <section className="w-1200 mx-auto smallDevice:w-full smallDevice:px-4 mediumDevice:w-full mediumDevice:px-4">
            <h2 className="text-darkBlue mb-10 smallDevice:text-center smallDevice:mb-5 mediumDevice:text-center mediumDevice:mb-5">
               Latest Articles
            </h2>

            <section className="flex justify-between smallDevice:flex-col gap-6 mediumDevice:flex-col mediumDevice:items-center">
               {dataContentCard.map((dt) => (
                  <Card key={dt.id} {...dt} />
               ))}
            </section>
         </section>
      </section>
   );
};

export default LatestArticle;
