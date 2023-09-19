import { BarOfPercentage } from "@/components/barpercentage";
import { Knowledge } from "@/components/knowledge";
import { ExtraSkills } from "@/components/extraskills";
import { EducactionCard } from "@/components/education";
import { getKnowledges } from "../services/getKnowledges";
const Index = () => {
  const knowledges = getKnowledges();
  return (
    <section>
      <div className="flex flex-col w-full items-center">
        <span>holi</span>
        <BarOfPercentage text={"Bobo"} percentageKnow={"30"} percentage={60} />
        {/* <Knowledge icon={'/coding.svg'} knowledge={"soplar bombas"} description={"Blog, E-Commerce"} alt={"texto alternativo"} /> */}
        {knowledges.map((knowledge) => (
          <Knowledge
            icon={knowledge.icon}
            knowledge={knowledge.knowledge}
            description={knowledge.description}
            alt={knowledge.alt}
          />
        ))}
        <ExtraSkills text={"holi"} />
        <EducactionCard
          institute="University of toronto"
          date="jan 2016 - Dic 2021"
          information="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus
        nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed
        amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et
        pellentesque. Molestie risus enim neque eget dui."
        />
      </div>
    </section>
  );
};

export default Index;
