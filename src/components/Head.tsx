import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Head = ({
   title,
   description,
}: {
   title: string;
   description: string;
}) => {
   return (
      <HelmetProvider>
         <Helmet>
            <title>{title} | Easybank</title>
            <meta name="description" content={`${description}`} />
         </Helmet>
      </HelmetProvider>
   );
};

export default Head;
