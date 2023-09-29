import Image from 'next/image'
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
function MainCover() {
  return (
    <section className='flex px-[10%] bg-slate-500 w-[100%]'>
        <div>
            <h2>I'm Laura Tascon</h2>
            <h2><span>Software</span> Developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, culpa voluptates quod eaque, suscipit deserunt inventore et commodi fugiat facilis, minus molestias blanditiis nisi expedita. Animi enim quis et nisi.</p>
            <button>Hire me <AiOutlineArrowRight/></button>
        </div>
        <div >
        <Image src="/images/perfil-removebg-preview.png" alt="Fotografía de la desarrolladora full stack Laura Tascón"  width={200} height={334} className='block w-[100%]'/>

        </div>
    </section>
  )
}

export default MainCover
