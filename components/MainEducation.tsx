

import { EducactionCard } from "./EducationCard";
import { SectionInformation } from "./SectionInformation";
import { getEducations } from "@/services/getEducations";
import { SeparatorLine } from "./Separatorline";

const educations = getEducations();

function MainEducations() {
    return (
        <section >
            <SectionInformation title="Education" text="Amet minim mollit non 
                deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. lorem ipsum" />
            <div className="flex flex-col shadow-md">

                {

                    educations.map((education, index) => (
                        <>
                            <EducactionCard institute={education.institute} date={education.date} information={education.information} />
                            {index !== educations.length - 1 && <SeparatorLine widthLine={"80"} />}
                        </>
                    ))
                }
            </div>

        </section>
    )
}

export { MainEducations }