import AsideInformation from "@/components/AsideInformation";
import { AsideSocialMedia } from "@/components/AsideSocialMedia";
import { IconSocialMedia } from "@/components/IconSocialMedia";
import MainCover from "@/components/MainCover";
import MainInformation from "@/components/MainInformation";

const Index = () => {

  return (
    <section className="flex w-full items-center justify-center">
      <section className="flex h-[100%] w-[80%] sticky left-0 ">
        <AsideInformation />
        <MainInformation />

        <section className="bg-red-500 w-[10%]">
          <AsideSocialMedia />
        </section>

      </section>

    </section>

  );
};

export default Index;
