import React from 'react';

const Card = ({
   img,
   author,
   title,
   content,
}: {
   img: string;
   author: string;
   title: string;
   content: string;
}) => {
   return (
      <a className="block w-[288px] h-fit rounded-b-lg bg-white rounded-lg group cursor-pointer">
         <div
            className="w-full h-[200px] bg-custom03 bg-no-repeat rounded-t-lg"
            style={{
               backgroundImage: `url("${img}")`,
            }}
         ></div>
         <div className=" p-6 rounded-b-lg">
            <span className="text-author text-grayishBlue">By {author}</span>
            <h3 className="text-titleCard leading-6 text-darkBlue py-2 group-hover:text-limeGreen group-hover:delay-100 group-hover:ease-linear">
               {title}
            </h3>
            <p className="text-textCard leading-5 text-grayishBlue">
               {content}
            </p>
         </div>
      </a>
   );
};

export default Card;
