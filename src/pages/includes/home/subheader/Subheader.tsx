import Button from '../../../../components/Button';

import imgMockups from '../../../../assets/images/image-mockups.png';
import backIntroDesk from '../../../../assets/svg/bg-intro-desktop.svg';

const Subheader = () => {
   return (
      <section className="relative h-[67vh] flex bg-veryLightGray z-0">
         <div
            className="absolute right-0 z-[-1] w-[57vw] h-[100vh] top-[-215px] bg-cover bg-no-repeat bg-[50px]"
            style={{ backgroundImage: `url('${backIntroDesk}')` }}
         ></div>
         <div className="w-1200 m-auto">
            <h1 className=" w-[600px]">Next generation digital banking</h1>
            <p className="w-[500px] text-grayishBlue my-7">
               Take your financial life online. Your Easybank account will be a
               one-stop for spending, saving, budgeting, investing, and much
               more.
            </p>
            <Button />
         </div>
         <div
            className="absolute w-[50vw] h-[90vh] z-[-1] bg-no-repeat bg-cover bg-[103px] top-[-103px] posi right-0"
            style={{ backgroundImage: `url('${imgMockups}')` }}
         ></div>
      </section>
   );
};

export default Subheader;
