import AsideInformation from "@/components/AsideInformation";
import MainCover from "@/components/MainCover";
import MainInformation from "@/components/MainInformation";

const Index = () => {

  return (
    <section className="flex w-full items-center justify-center">
      <section className="flex h-[100%] w-[80%] ">
        <AsideInformation />
        <MainInformation/>

        <section className="bg-red-500 w-[10%]">
          <p>dwqdewqd</p>
        </section>

      </section>

    </section>

  );
};

export default Index;
