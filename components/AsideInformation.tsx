import Image from 'next/image'
import React from 'react'
import BarList from './BarList'
import { SeparatorLine } from './separatorline'
import { getExtraSkills } from '@/services/getExtraSkills';
import { getPercentProgramming } from '@/services/getPercentProgramming';
import { getPercentLenguage } from '@/services/getPercentageLenguage';
import { ExtraSkills } from './extraskills';
import PersonalInformation from './PersonalInformation';
import Skills from './Skills';

function AsideInformation() {

    return (
        <aside className="bg-red-300 w-[20%] flex flex-col">
            <PersonalInformation/>
            <SeparatorLine widthLine={"15%"} />
            <Skills/>
        </aside>
    )
}

export default AsideInformation