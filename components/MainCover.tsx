import Image from 'next/image'
import React from 'react'
import { MyButton } from './Button'

const descriptionText =
  `Systems Engineering student, focused 
  on Backend development. I possess strong social 
  skills, including initiative and proactivity, 
  along with a genuine passion for both work and continuous 
  learning. I pride myself on my attention to detail and aesthetic 
  sensibility, and always strive for excellence in every task.`


function MainCover() {
  return (
    <section className='relative p-[8%] bg-white w-[100%] h-[30%] shadow-md'>
      <div className='w-[60%]'>
        <div className='text-title pb-[4%]'>
          <h1 >I&apos;m Laura Tascon</h1>
          <h2><span className='text-purple-300'>Full-Stack</span> Developer</h2>
        </div>
        <p className='text-secondary'>
          {descriptionText}
        </p>
        <MyButton />
      </div>
      <picture className='absolute w-[37%] bottom-0 left-[60%] ' >
        <Image src="/images/perfil-removebg-preview.png" alt="Fotografía de la desarrolladora full stack Laura Tascón" width={600} height={634} className='block w-[100%]' />
        <div className='tool-tip' role="tooltip" >
          <div className='heart'></div> <p>I love Programming </p>
        </div>
      </picture>

    </section>
  )
}


export { MainCover }
