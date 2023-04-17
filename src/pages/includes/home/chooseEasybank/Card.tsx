import React from 'react';

const Card = ({
   id,
   svg,
   title,
   content,
}: {
   id: number;
   svg: string;
   title: string;
   content: string;
}) => {
   return (
      <div className="w-fit p-[0.5rem]">
         <img src={svg} alt={title} />
         <div>
            <h3 className="mt-8 mb-6 text-darkBlue">{title}</h3>
            <p
               className="text-grayishBlue"
               style={{ fontSize: `${18 / 16}rem` }}
            >
               {content}
            </p>
         </div>
      </div>
   );
};

export default Card;
