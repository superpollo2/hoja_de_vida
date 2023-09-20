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

const Index = () => {
  const knowledges = getKnowledges();
  const educations = getEducations();
  const PercentageLenguage = getPercentLenguage();
  const PercentageProgramming = getPercentProgramming();
  const extraSkills = getExtraSkills();

  return (
    <section className="flex w-full items-center justify-center">
      <section className="flex h-[100%] w-[80%]">

        <section className="bg-red-300 w-[20%] flex flex-col">
          <section className="flex flex-col items-center">
            <div className="p-6">
              <Image src="/images/perfil.jpg" alt="Fotografía de la desarrolladora full stack Laura Tascón" width={200} height={334} className="rounded-full"/>
            </div>
            <div>
              <h3 className="text-c"> Laura Tascón</h3>
              <span className="text-b">Full stack developer</span>
            </div>
          </section>

          <section></section>

          <section className="p-3">
            <h3 className="text-c p-2">Languages</h3>
            {
              PercentageLenguage.map((percentage) => (
                <>
                  <BarOfPercentage text={percentage.text} percentage={percentage.percentage} />
                </>
              ))
            }
            <SeparatorLine widthLine={"15%"} />
          </section>
          <section className="p-3">
            <h3 className="text-c p-2">Languages</h3>
            {
              PercentageProgramming.map((percentage) => (
                <>
                  <BarOfPercentage text={percentage.text} percentage={percentage.percentage} />
                </>
              ))
            }
            <SeparatorLine widthLine={"15%"} />
          </section>
          <section className="p-3">
            {
              extraSkills.map((skill) => (
                <>
                  <ExtraSkills text={skill.text} />
                </>
              ))
            }
            <SeparatorLine widthLine={"15%"} />

          </section>
        </section>

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
