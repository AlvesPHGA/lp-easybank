import React from 'react';
import Subheader from '../includes/Global/Subheader';
import Head from '../../components/Head';

const About = () => {
   return (
      <>
         <Head title="About" description="" />
         <div className="h-[calc(100vh-340px)]">
            <Subheader title="About" />
         </div>
      </>
   );
};

export default About;
