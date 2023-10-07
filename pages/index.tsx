import AsideInformation from "@/components/AsideInformation";
import { AsideSocialMedia } from "@/components/AsideSocialMedia";
import MainInformation from "@/components/MainContent";

const Index = () => {

  return (
    <section className="flex w-full items-center justify-center overflow-y-hidden">
      <section className="flex max-h-screen w-[80%]">
        <AsideInformation  />
        <MainInformation />
        <AsideSocialMedia />
        

      </section>
    </section>

  );
};

export default Index;
