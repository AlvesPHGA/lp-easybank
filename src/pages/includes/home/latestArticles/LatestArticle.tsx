import React from 'react';
import { dataContentCard } from './dataCardLatestArticles';
import Card from './Card';

const LatestArticle = () => {
   return (
      <section className="bg-veryLightGray py-28 smallDevice:py-10">
         <section className="w-1200 mx-auto smallDevice:w-full smallDevice:px-4">
            <h2 className="text-darkBlue mb-10">Latest Articles</h2>

            <section className="flex justify-between smallDevice:flex-col gap-6">
               {dataContentCard.map((dt) => (
                  <Card key={dt.id} {...dt} />
               ))}
            </section>
         </section>
      </section>
   );
};

export default LatestArticle;
