
import { getBriefcase } from "@/services/getBriegcase";
import { SectionInformation } from "./SectionInformation"
import { BriefcaseCard } from "./BriefcaseCard";

const briefcaseText =
    `Creative individual with a varied portfolio 
     demonstrating skills in design and problem-solving. 
     Committed to producing high-quality work and open to new challenges.`

const briefcases = getBriefcase();

function Mainbriefcases() {
    return (
        <section className="w-full pb-[10%] ">
            <SectionInformation title="Briefcase" text={briefcaseText}/>
            <section className="flex flex-row items-center justify-center space-x-10 overflow-x-auto">

                {

                    briefcases.map((briefcase) => (
                    <>
                    <BriefcaseCard key={briefcase.id} title={briefcase.title} description={briefcase.description} image={briefcase.image} link={briefcase.link} alt={briefcase.link} />

                    </>
                        
                    ))
                }

            </section>

        </section>
    )
}

export { Mainbriefcases }