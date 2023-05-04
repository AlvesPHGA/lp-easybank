import Button from '../../../../components/Button';

const Subheader = () => {
   return (
      <section className="relative h-fit pt-[7rem] pb-[7.7rem] flex bg-veryLightGray z-0 smallDevice:flex-col smallDevice:mt-[100px] smallDevice:pt-0 smallDevice:pb-10 mediumDevice:flex-col mediumDevice:mt-[100px] mediumDevice:pt-0 mediumDevice:pb-16">
         <div className="back-home-intro absolute  right-0 z-[-1] w-[57vw] h-[100vh] top-[-215px] bg-cover bg-no-repeat bg-customPosition01 bg-custom02 smallDevice:block smallDevice:h-[40vh] smallDevice:w-full smallDevice:relative smallDevice:top-0 smallDevice:bg-smallDev smallDevice:bg-mDev mediumDevice:block  mediumDevice:h-[43.1vh] mediumDevice:w-full mediumDevice:relative mediumDevice:top-0 mediumDevice:bg-mediumDev mediumDevice:bg-mDev"></div>

         <div className="w-1200 m-auto smallDevice:w-full smallDevice:px-4 smallDevice:mt-8 mediumDevice:w-full mediumDevice:px-4 mediumDevice:mt-8">
            <h1 className="text-darkBlue w-[600px] smallDevice:w-full smallDevice:text-4xl smallDevice:text-center mediumDevice:w-full mediumDevice:text-4xl mediumDevice:text-center">
               Next generation digital banking
            </h1>
            <p className="w-[500px] text-grayishBlue my-7 smallDevice:w-full smallDevice:text-center smallDevice:my-5 mediumDevice:w-full mediumDevice:text-center mediumDevice:my-5">
               Take your financial life online. Your Easybank account will be a
               one-stop for spending, saving, budgeting, investing, and much
               more.
            </p>

            <Button />
         </div>

         <div className="back-mockup absolute bg-ba w-[50vw] h-[840px] z-[-1] bg-no-repeat bg-custom bg-[152px] top-[-115px] posi right-0 smallDevice:h-[60vh] smallDevice:left-0 smallDevice:w-full smallDevice:bg-contain smallDevice:bg-[center] smallDevice:top-[-100px] mediumDevice:h-[65vh] mediumDevice:left-0 mediumDevice:w-full mediumDevice:bg-custom03 mediumDevice:bg-mDev02 mediumDevice:top-[-93px]"></div>
      </section>
   );
};

export default Subheader;
