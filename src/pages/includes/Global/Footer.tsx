import React from 'react';
import Button from '../../../components/Button';

import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';
import { ReactComponent as Facebook } from '../../../assets/svg/icon-facebook.svg';
import { ReactComponent as YouTube } from '../../../assets/svg/icon-youtube.svg';
import { ReactComponent as Twitter } from '../../../assets/svg/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../../../assets/svg/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../../../assets/svg/icon-instagram.svg';

const Footer: React.FC = () => {
   return (
      <footer className="border bg-darkBlue py-16">
         <div className="w-1200 mx-auto flex justify-between items-center">
            <div>
               <Logo className="logo mb-12" />
               <div className="flex items-center gap-2">
                  <Facebook className="iconSociaMedia cursor-pointer" />
                  <YouTube className="iconSociaMedia cursor-pointer" />
                  <Twitter className="iconSociaMedia cursor-pointer" />
                  <Pinterest className="iconSociaMedia cursor-pointer" />
                  <Instagram className="iconSociaMedia cursor-pointer" />
               </div>
            </div>

            <div className="navFooter mr-28">
               <a className="about text-white text-sm">About Us</a>
               <a className="contact text-white text-sm">Contact</a>
               <a className="blog text-white text-sm">Blog</a>
               <a className="career text-white text-sm">Careers</a>
               <a className="support text-white text-sm">Support</a>
               <a className="policy text-white text-sm">Privacy Policy</a>
            </div>

            <div className="text-right">
               <Button />
               <span className="block text-grayishBlue mt-5">
                  Easybank. All Rights Reserved
               </span>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
