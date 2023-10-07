import Image from 'next/image';
import React from 'react';
import { SeparatorLine } from './Separatorline';



function PersonalInformation() {
    return (
        <div>
            <section className="flex flex-col items-center ">
                <div className="p-1">
                    <Image src="/images/perfil.jpg" alt="Fotografía de la desarrolladora full stack Laura Tascón" width={200} height={334} className="rounded-full" />
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-primary"> Laura Tascón</h3>
                    <span className="text-secondary">Full stack developer</span>
                </div>
            </section>
            <SeparatorLine widthLine={"90"} />
            <section className='py-[1.5rem] text-secondary '>
                <div className='flex justify-between text-'><span>Age: </span><span>27</span></div>
                <div className='flex justify-between'><span>Residence: </span><span>BD</span></div>
                <div className='flex justify-between'><span>Freelance: </span><span>Available</span></div>
                <div className='flex justify-between'><span>Address: </span><span>Carrera 66 #101-36</span></div>
            </section>
        </div>
    )
}

export default PersonalInformation