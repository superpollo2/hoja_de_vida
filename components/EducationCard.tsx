interface EducationCardProps {
  institute: string;
  title: string;
  date: string;
  information: string;
}

function EducactionCard ({
  institute,
  title,
  date,
  information,
}: EducationCardProps)  {
  return (
    <article className="flex space-x-[20%] w-full pb-4 pt-11 px-10 bg-white">
      <div>
        <h3 className="text-primary">{institute}</h3>
        <div className="flex items-center py-6">
          <span className="pr-[2rem] text-secondary ">Student</span>
          <span className="text-white bg-yellow_egg text-a px-[0.8rem] py-[0.1rem]">
            {date}
          </span>
        </div>
      </div>
      <div className="w-[50%]">
        <h3 className="text-primary">{title}</h3>
        <p className="py-6 text-left ">{information}</p>
      </div>
    </article>

  );
};

export { EducactionCard };
