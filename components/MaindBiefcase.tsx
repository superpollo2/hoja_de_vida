

const briefcases = getBriefcase();

import { getBriefcase } from "@/services/getBriegcase";
import { SectionInformation } from "./SectionInformation"
import { BriefcaseCard } from "./BriefcaseCard";

function Mainbriefcases() {
    return (
        <section className="w-full">
            <SectionInformation title="Portfolio" text="Amet minim mollit non 
                deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. lorem ipsum" />
            <div className="flex flex-row items-center justify-center space-x-10">

                {

                    briefcases.map((briefcase) => (
                        
                            <BriefcaseCard key={briefcase.id} title={briefcase.title} description={briefcase.description} image={briefcase.image} link={briefcase.link} alt={briefcase.link} />
                        
                    ))
                }

            </div>

        </section>
    )
}

export { Mainbriefcases }