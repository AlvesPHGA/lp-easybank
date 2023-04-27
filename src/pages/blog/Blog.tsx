import React from 'react';
import Subheader from '../includes/Global/Subheader';
import Head from '../../components/Head';

const Blog = () => {
   return (
      <>
         <Head title="Blog" description="" />
         <div className="h-[calc(100vh-340px)]">
            <Subheader title="Blog" />
         </div>
      </>
   );
};

export default Blog;
