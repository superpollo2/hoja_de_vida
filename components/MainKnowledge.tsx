

import { getKnowledges } from "@/services/getKnowledges";
import { KnowledgeCard } from "./KnowledgeCard";
import { SectionInformation } from "./SectionInformation";

const knowledgeText = `
I have experience in Backend development using Java, Python, and C#, 
with frameworks such as Spring Boot, Django, FastAPI, and .NET. 
I also have Frontend skills with HTML, CSS, JavaScript, and TypeScript, 
along with frameworks like Next.js and Tailwind CSS. 
Additionally, I have knowledge in design principles and usability, as well as 
experience in database management (MySQL, MariaDB, Oracle, MongoDB) and quality assurance (QA). 
My expertise extends to project management using Agile and Scrum methodologies, 
and I have practical experience with tools like Azure DevOps.
`;
const knowledge = getKnowledges();

function MainKnowledge() {
    return (
        <section >
            <SectionInformation title="Knowledge" text={knowledgeText} />
            <div className="grid grid-cols-3 gap-5 ">

                {
                    knowledge.map((knowledge) => (
                        <KnowledgeCard key={knowledge.id} icon={knowledge.icon} knowledge={knowledge.knowledge} description={knowledge.description} alt={knowledge.alt} />
                    ))

                }
            </div>

        </section>
    )
}

export { MainKnowledge }