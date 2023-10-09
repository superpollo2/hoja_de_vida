import React from 'react'
import {MainCover} from './MainCover'
import { MainKnowledge } from './MainKnowledge'
import { MainEducations } from './MainEducation'
import { Mainbriefcases } from './MaindBiefcase'
import { Footer } from './Footer'

function MainContent() {
  return (
    <section className="bg-slate-50  w-[70%] max-h-screen overflow-y-auto">
      <div className='w-full px-[2rem]'>
        <MainCover/>
        <MainKnowledge/>
        <MainEducations/>
        <Mainbriefcases/>
        
    </div>
      <div className='w-full'>
        <Footer/>
      </div>
    </section>
    
    
  )
}

export {MainContent}