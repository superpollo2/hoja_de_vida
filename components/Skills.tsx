import React from 'react'
import BarList from './BarList'
import { getExtraSkills } from '@/services/getExtraSkills';
import { getPercentProgramming } from '@/services/getPercentProgramming';
import { getPercentLenguage } from '@/services/getPercentageLenguage';
import { SeparatorLine } from './separatorline';
import { ExtraSkills } from './extraskills';

function Skills() {
    const PercentageLanguage = getPercentLenguage();
    const PercentageProgramming = getPercentProgramming();
    const extraSkills = getExtraSkills();
    return (
        <div>
            <BarList barList={PercentageLanguage} title="Languages" />
            <SeparatorLine widthLine={"15%"} />
            <BarList barList={PercentageProgramming} title="Languages" />
            <SeparatorLine widthLine={"15%"} />
            <section className="p-3">
                {
                    extraSkills.map((skill) => (
                        <>
                            <ExtraSkills text={skill.text} />
                        </>
                    ))
                }
            </section>
        </div>
    )
}

export default Skills