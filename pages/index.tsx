import { BarOfPercentage } from "@/components/barpercentage";
import { Knowledge } from "@/components/knowledge";
import { ExtraSkills } from "@/components/extraskills";
import { EducactionCard } from "@/components/education";
import { Briefcase } from "@/components/briefcase";
import { getKnowledges } from "../services/getKnowledges";
import { getEducations } from "@/services/getEducations";
import { getPercentLenguage } from "@/services/getPercentageLenguage";
import { getPercentProgramming } from "@/services/getPercentProgramming";
import { getExtraSkills } from "@/services/getExtraSkills";
import { SeparatorLine } from "@/components/separatorline";
import Image from 'next/image';
import BarList from "@/components/BarList";
import AsideInformation from "@/components/AsideInformation";

const Index = () => {
  const knowledges = getKnowledges();
  const educations = getEducations();
  const PercentageLanguage = getPercentLenguage();
  const PercentageProgramming = getPercentProgramming();
  const extraSkills = getExtraSkills();

  return (
    <section className="flex w-full items-center justify-center">
      <section className="flex h-[100%] w-[80%] ">
        <AsideInformation />

        <section className="bg-red-400 w-[70%]">
          <p>jsdashdja</p>
        </section>

        <section className="bg-red-500 w-[10%]">
          <p>dwqdewqd</p>
        </section>

      </section>

    </section>

  );
};

export default Index;
