import Image from 'next/image'
import React from 'react'
import { MyButton } from './Button'

function MainCover() {
  return (
    <section className='relative p-[8%] bg-white w-[100%] h-[40%]'>
      <div className='w-[60%]'>
        <div className='text-title pb-[4%]'>
          <h1 >I&apos;m Laura Tascon</h1>
          <h2><span className='text-purple-300'>Full-Stack</span> Developer</h2>
        </div>
        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, culpa voluptates quod eaque, suscipit deserunt inventore et commodi fugiat facilis, minus molestias
          blanditiis nisi expedita. Animi enim quis et nisi.
        </p>  
        <MyButton />
      </div>
      <picture className='absolute w-[37%] bottom-0 left-[60%] ' >
        <Image src="/images/perfil-removebg-preview.png" alt="Fotografía de la desarrolladora full stack Laura Tascón" width={600} height={634} className='block w-[100%]' />
        <tool-tip role="tooltip">
          <div className='heart'></div> <p>Me gusta el cine </p>
        </tool-tip>
      </picture>
    </section>
  )
}

export { MainCover}
