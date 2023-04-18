import React from 'react';
import Subheader from '../includes/home/subheader/Subheader';
import ChooseEasybank from '../includes/home/chooseEasybank/ChooseEasybank';
import LatestArticle from '../includes/home/latestArticles/LatestArticle';

const Home = () => {
   return (
      <>
         <Subheader />
         <ChooseEasybank />
         <LatestArticle />
      </>
   );
};

export default Home;
