

import { EducactionCard } from "./EducationCard";
import { SectionInformation } from "./SectionInformation";
import { getEducations } from "@/services/getEducations";
import { SeparatorLine } from "./SeparatorLine";

const educationText =
    `Passionate and dedicated graduate with a strong academic background
    and diverse skillset. Eager learner committed to continuous personal 
    and professional development.`

const educations = getEducations();

function MainEducations() {
    return (
        <section >
            <SectionInformation title="Education" text={educationText} />
            <div className="flex flex-col shadow-md">

                {

                    educations.map((education, index) => (
                        <>
                            <EducactionCard key={education.id} institute={education.institute} title={education.title} date={education.date} information={education.information} />
                            {index !== educations.length - 1 && <SeparatorLine widthLine={"80"} />}
                        </>
                    ))
                }
            </div>

        </section>
    )
}

export { MainEducations }