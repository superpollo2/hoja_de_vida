import React from 'react'
import MainCover from './MainCover'
import { MainKnowledge } from './MainKnowledge'
import { MainEducations } from './MainEducation'
import { Mainbriefcases } from './MaindBiefcase'

function MainInformation() {
  return (
    <div className="bg-red-400 w-[70%] px-[2rem]  max-h-screen overflow-y-auto">
        <MainCover/>
        <MainKnowledge/>
        <MainEducations/>
        <Mainbriefcases/>
    </div>
  )
}

export default MainInformation