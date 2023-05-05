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
      <footer className="border bg-darkBlue py-16 smallDevice:py-11 mediumDevice:py-11 largerDevice:py-12">
         <div className="w-1200 mx-auto flex justify-between items-center smallDevice:w-full smallDevice:px-4 smallDevice:flex-col  mediumDevice:w-full mediumDevice:px-4 mediumDevice:flex-col largerDevice:w-full largerDevice:px-5 largerDevice:flex-col">
            <div>
               <Logo className="logo mb-12 smallDevice:w-[200px] smallDevice:mx-auto smallDevice:mb-8 mediumDevice:w-[200px] mediumDevice:mx-auto mediumDevice:mb-8 largerDevice:w-[220px] largerDevice:mx-auto largerDevice:mb-10" />
               <div className="flex items-center gap-2">
                  <Facebook className="iconSociaMedia cursor-pointer" />
                  <YouTube className="iconSociaMedia cursor-pointer" />
                  <Twitter className="iconSociaMedia cursor-pointer" />
                  <Pinterest className="iconSociaMedia cursor-pointer" />
                  <Instagram className="iconSociaMedia cursor-pointer" />
               </div>
            </div>

            <div className="navFooter mr-28 smallDevice:flex smallDevice:flex-col smallDevice:text-center smallDevice:mx-auto smallDevice:my-8 mediumDevice:flex mediumDevice:flex-col mediumDevice:text-center mediumDevice:mx-auto mediumDevice:my-8 largerDevice:flex largerDevice:flex-col largerDevice:text-center largerDevice:mx-auto largerDevice:my-10">
               <a className="about text-white text-sm hover:delay-200 hover:text-limeGreen cursor-pointer">
                  About Us
               </a>
               <a className="contact text-white text-sm hover:delay-200 hover:text-limeGreen cursor-pointer">
                  Contact
               </a>
               <a className="blog text-white text-sm hover:delay-200 hover:text-limeGreen cursor-pointer">
                  Blog
               </a>
               <a className="career text-white text-sm hover:delay-200 hover:text-limeGreen cursor-pointer">
                  Careers
               </a>
               <a className="support text-white text-sm hover:delay-200 hover:text-limeGreen cursor-pointer">
                  Support
               </a>
               <a className="policy text-white text-sm hover:delay-200 hover:text-limeGreen cursor-pointer">
                  Privacy Policy
               </a>
            </div>

            <div className="text-right smallDevice:text-center mediumDevice:text-center largerDevice:text-center">
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
