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
      <div className="w-fit p-[0.5rem] smallDevice:text-center mediumDevice:text-center">
         <img
            src={svg}
            alt={title}
            className="smallDevice:px-auto smallDevice:inline mediumDevice:inline"
         />
         <div>
            <h3 className="title mt-8 mb-6 text-darkBlue smallDevice:my-5 mediumDevice:my-5">
               {title}
            </h3>
            <p
               className="text-grayishBlue smallDevice:text-[1rem] mediumDevice:text-[1rem]"
               style={{ fontSize: `${18 / 16}rem` }}
            >
               {content}
            </p>
         </div>
      </div>
   );
};

export default Card;
