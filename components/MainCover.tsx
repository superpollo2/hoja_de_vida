import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
function MainCover() {
  return (
    <section className='relative p-[8%]  bg-slate-50 w-[100%] h-[40%]'>
      <div className='w-[60%]'>
        <div className='text-title pb-[4%]'>
          <h1 >I'm Laura Tascon</h1>
          <h2><span className='text-blue-500'>Full-Stack</span> Developer</h2>
        </div>
        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, culpa voluptates quod eaque, suscipit deserunt inventore et commodi fugiat facilis, minus molestias
          blanditiis nisi expedita. Animi enim quis et nisi.
        </p>
        <button className='flex items-center rounded-lg  text-primary py-[2%] px-[5%] mt-[5%] bg-blue-500'>Hire me <AiOutlineArrowRight  style={{ marginLeft: '10px' }}/></button>
      </div>
      <div className='absolute w-[37%] bottom-0 left-[60%] ' >
        <Image src="/images/perfil-removebg-preview.png" alt="Fotografía de la desarrolladora full stack Laura Tascón" width={600} height={634} className='block w-[100%]' />
      </div>
    </section>
  )
}

export default MainCover
