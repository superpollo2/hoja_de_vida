import Image from 'next/image'
import React from 'react'

import PersonalInformation from './PersonalInformation';
import Skills from './Skills';
import { SeparatorLine } from './Separatorline';

function AsideInformation() {

    return (
        
        <aside className="bg-indigo-100 shadow-lg w-[20%] flex flex-col p-[2rem]   ">
            <PersonalInformation/>
            <SeparatorLine widthLine={"90"} />
            <Skills/>
        </aside>
    )
}

export default AsideInformation