

import { getKnowledges } from "@/services/getKnowledges";
import { KnowledgeCard } from "./KnowledgeCard";
import { SectionInformation } from "./SectionInformation";

const knowledge = getKnowledges();

function MainKnowledge() {
    return (
        <section >
            <SectionInformation title="Knowledge" text="Lorem, ipsum dolor sit amet 
                consectetur adipisicing elit. Velit doloremque dicta 
                atque eius repellat consequuntur expedita mollitia quod 
                similique reiciendis magni et rerum molestias molestiae, 
                quasi at consectetur quisquam fuga." />         
            <div className="grid grid-cols-3 gap-5 ">
                
                {
                    knowledge.map((knowledge) => (
                        <KnowledgeCard icon={knowledge.icon} knowledge={knowledge.knowledge} description={knowledge.description} alt={knowledge.alt} />
                    ))
                    
                }
            </div>

        </section>
    )
}

export { MainKnowledge }