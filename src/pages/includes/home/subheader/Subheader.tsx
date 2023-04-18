import Button from '../../../../components/Button';

import imgMockups from '../../../../assets/images/image-mockups.png';
import backIntroDesk from '../../../../assets/svg/bg-intro-desktop.svg';

const Subheader = () => {
   return (
      <section className="relative h-fit pt-[7rem] pb-[7.7rem] flex bg-veryLightGray z-0">
         <div
            className="absolute right-0 z-[-1] w-[57vw] h-[100vh] top-[-215px] bg-cover bg-no-repeat bg-customPosition01 bg-custom02"
            style={{ backgroundImage: `url('${backIntroDesk}')` }}
         ></div>
         <div className="w-1200 m-auto">
            <h1 className="text-darkBlue w-[600px]">
               Next generation digital banking
            </h1>
            <p className="w-[500px] text-grayishBlue my-7">
               Take your financial life online. Your Easybank account will be a
               one-stop for spending, saving, budgeting, investing, and much
               more.
            </p>
            <Button />
         </div>
         <div
            className="absolute w-[50vw] h-[840px] z-[-1] bg-no-repeat bg-custom bg-[152px] top-[-115px] posi right-0"
            style={{ backgroundImage: `url('${imgMockups}')` }}
         ></div>
      </section>
   );
};

export default Subheader;
