import Image from 'next/image'
import React from 'react'
import { SeparatorLine } from './Separatorline'
import PersonalInformation from './PersonalInformation';
import Skills from './Skills';

function AsideInformation() {

    return (
        <aside className="bg-red-300 w-[20%] flex flex-col p-[2rem]">
            <PersonalInformation/>
            <SeparatorLine widthLine={"15%"} />
            <Skills/>
        </aside>
    )
}

export default AsideInformation