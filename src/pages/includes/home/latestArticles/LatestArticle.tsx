import React from 'react';
import { dataContentCard } from './dataCardLatestArticles';

const LatestArticle = () => {
   return (
      <section className="bg-veryLightGray py-28">
         <section className="w-1200 mx-auto">
            <h2 className="text-darkBlue mb-10">Latest Articles</h2>

            <section>
               {dataContentCard.map((dt) => (
                  <a key={dt.id}>
                     <div>
                        <img src={dt.img} alt={dt.title} />
                     </div>
                     <div>
                        <span>{dt.author}</span>
                        <h3>{dt.title}</h3>
                        <p>{dt.content}</p>
                     </div>
                  </a>
               ))}
            </section>
         </section>
      </section>
   );
};

export default LatestArticle;
