import React from 'react';
import { dataContentCard } from './dataCardLatestArticles';
import Card from './Card';

const LatestArticle = () => {
   return (
      <section className="bg-veryLightGray py-28">
         <section className="w-1200 mx-auto">
            <h2 className="text-darkBlue mb-10">Latest Articles</h2>

            <section className="flex justify-between">
               {dataContentCard.map((dt) => (
                  <Card key={dt.id} {...dt} />
               ))}
            </section>
         </section>
      </section>
   );
};

export default LatestArticle;
