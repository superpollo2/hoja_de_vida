interface EducationCardProps {
  institute: string;
  date: string;
  information: string;
}
const EducactionCard = ({
  institute,
  date,
  information,
}: EducationCardProps) => {
  //const width = `${percentage}%`;
  return (
    <article className="flex space-x-[10%] w-[85%] pb-4 pt-11 px-10 bg-zinc-50">
      <div>
        <h3 className="text-c">{institute}</h3>
        <div className="flex items-center py-6">
          <span className="pr-[2rem] text-b ">Student</span>
          <span className="text-white bg-yellow_egg text-a px-[0.8rem] py-[0.1rem]">
            {date}
          </span>
        </div>
      </div>
      <div className="w-[65%]">
        <h3 className="text-c">Certificate of web training</h3>
        <p className="py-6 text-left ">{information}</p>
      </div>
    </article>



    // <section className="flex items-center justify-between w-[90%]">
    // <section className="flex justify-between flex-col gap-3 " >
    //   <span className="text-c">{institute}</span>
    //   <div className="flex justify-between items-center">
    //     <span className="class-b text-black">Student</span>
    //     <span className="bg-amber-400 text-white text-[10px] py-px items-center flex px-2 h-fit">
    //       {date}
    //     </span>
    //   </div>
    // </section>
    // <section className="w-[60%] gap-3">
    //   <span className="text-c">Cerficate Of Web Training</span>
    //   <article className="w-[60%]">{information}</article>
    // </section>
    // </section>
  );
};

export { EducactionCard };
