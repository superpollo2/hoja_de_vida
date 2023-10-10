import React from 'react'

import {PersonalInformation} from './PersonalInformation';
import {Skills} from './Skills';
import { SeparatorLine } from './SeparatorLine';

function AsideInformation() {

    return (
        
        <aside className="bg-indigo-100 shadow-lg w-[20%] flex flex-col p-[1rem]   ">
            <PersonalInformation/>
            <SeparatorLine widthLine={"90"} />
            <Skills/>
        </aside>
    )
}

export  { AsideInformation }