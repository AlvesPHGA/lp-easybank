import Button from '../../../../components/Button';

import imgMockups from '../../../../assets/images/image-mockups.png';

const Subheader = () => {
   return (
      <section className="border relative h-70vh flex">
         <div className="w-1200 m-auto border">
            <h1 className=" w-[600px]">Next generation digital banking</h1>
            <p className="w-[500px] text-grayishBlue my-7">
               Take your financial life online. Your Easybank account will be a
               one-stop for spending, saving, budgeting, investing, and much
               more.
            </p>
            <Button />
         </div>
         <div className="absolute top-[-90px] left-[730px] h-[90vh] border shrink-1 z-[-1]">
            <div className="shrink-0 h-full w-[50vw] border-brightCyan border">
               <img
                  className="w-full h-full"
                  src={imgMockups}
                  alt="Images devices"
               />
            </div>
         </div>
      </section>
   );
};

export default Subheader;
