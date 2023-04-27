import React from 'react';
import Subheader from '../includes/home/subheader/Subheader';
import ChooseEasybank from '../includes/home/chooseEasybank/ChooseEasybank';
import LatestArticle from '../includes/home/latestArticles/LatestArticle';
import Head from '../../components/Head';

const Home = () => {
   return (
      <>
         <Head
            title="Home"
            description="Take your financial life online. Your Easybank account will be a one-stop for spending, saving, budgeting, investing, and much more."
         />
         <Subheader />
         <ChooseEasybank />
         <LatestArticle />
      </>
   );
};

export default Home;
