const Subheader = ({ title }: { title: string }) => {
   return (
      <section className="py-10 bg-lightGrayishBlue smallDevice:mt-[100px] mediumDevice:mt-[100px]">
         <div className="w-1200 mx-auto smallDevice:w-full smallDevice:py-4 mediumDevice:w-full mediumDevice:py-4">
            <h1 className="text-center">{title}</h1>
         </div>
      </section>
   );
};

export default Subheader;
