import Button from '../../../../components/Button';

import imgMockups from '../../../../assets/images/image-mockups.png';
import backIntroDesk from '../../../../assets/svg/bg-intro-desktop.svg';

const Subheader = () => {
   return (
      <section className="relative h-fit pt-[7rem] pb-[7.7rem] flex bg-veryLightGray z-0 smallDevice:flex-col smallDevice:mt-[100px] smallDevice:pt-0 smallDevice:pb-10">
         <div className="absolute bg-backDesktop right-0 z-[-1] w-[57vw] h-[100vh] top-[-215px] bg-cover bg-no-repeat bg-customPosition01 bg-custom02 smallDevice:block smallDevice:bg-backDevice smallDevice:h-[26.7vh] smallDevice:w-full smallDevice:relative smallDevice:top-0 smallDevice:cBS_mbl01 smallDevice:bg-center"></div>
         <div className="w-1200 m-auto smallDevice:w-full smallDevice:px-4 smallDevice:mt-8">
            <h1 className="text-darkBlue w-[600px] smallDevice:w-full smallDevice:text-4xl smallDevice:text-center">
               Next generation digital banking
            </h1>
            <p className="w-[500px] text-grayishBlue my-7 smallDevice:w-full smallDevice:text-center">
               Take your financial life online. Your Easybank account will be a
               one-stop for spending, saving, budgeting, investing, and much
               more.
            </p>

            <Button />
         </div>
         <div className="absolute bg-mockup bg-ba w-[50vw] h-[840px] z-[-1] bg-no-repeat bg-custom bg-[152px] top-[-115px] posi right-0 smallDevice:h-[40vh] smallDevice:left-0 smallDevice:w-full smallDevice:bg-contain smallDevice:bg-[center] smallDevice:top-[-100px]"></div>
      </section>
   );
};

export default Subheader;
