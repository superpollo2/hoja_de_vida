import React from 'react'
import { BarList } from './BarList';
import { getExtraSkills } from '@/services/getExtraSkills';
import { getPercentProgramming } from '@/services/getPercentProgramming';
import { getPercentLenguage } from '@/services/getPercentageLenguage';
import { SeparatorLine }  from './SeparatorLine';
import { ExtraSkills } from './extraskills'

function Skills() {
    const percentageLanguage = getPercentLenguage();
    const percentageProgramming = getPercentProgramming();
    const extraSkills = getExtraSkills();
    return (
        <div>
            <BarList barList={percentageLanguage} title="Languages" />
            <SeparatorLine widthLine={"90"} />
            <BarList barList={percentageProgramming} title="Programming languages" />
            <SeparatorLine widthLine={"90"} />
            <section className="p-3">
                {
                    extraSkills.map((skill) => (
                        <>
                            <ExtraSkills key={skill.id} text={skill.text} />
                        </>
                    ))
                }
            </section>
        </div>
    )
}

export { Skills}