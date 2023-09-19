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
    <article className="flex justify-between w-[65%] py-[3rem] px-[2.5rem] bg-zinc-500">
      <div>
        <h3 className="text-[24px] pb-[1.5rem]">Título</h3>
        <div>
            <span className="pr-[2rem]">Student</span><span className="text-white bg-[#FFB400] text-[10px] px-[1rem] py-[0.1rem]">Jan 1016 - Dec 2021</span>
        </div>
      </div>
      <div className = "w-[55%]">
        <h3 className="text-[24px] pb-[1.5rem]">Titulo</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime beatae aspernatur id magnam fugit, deleniti dolores? Consequuntur, voluptates? Voluptatibus odit deserunt deleniti non dicta explicabo alias recusandae atque hic tempore? Nesciunt, voluptatem? Neque illum aperiam vel iusto? Ipsum obcaecati, architecto dolorum iure animi eaque facere sit temporibus repellendus earum nam autem illo laboriosam maiores quia voluptas odit! Autem, eveniet. Et distinctio voluptatem vel. Praesentium enim laudantium, fuga fugiat ipsa</p>
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
