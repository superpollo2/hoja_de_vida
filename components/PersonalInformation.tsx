import Image from 'next/image';
import React from 'react';
import { SeparatorLine } from './SeparatorLine';




function PersonalInformation() {
    return (
        <div>
            <section className="flex flex-col items-center ">
                <picture className="pb-6">
                    <Image src="/images/perfil.jpg" alt="Fotografía de la desarrolladora full stack Laura Tascón" width={200} height={334} className="rounded-full" />
                </picture>
                <div className="flex flex-col items-center py-4">
                    <h3 className="text-primary-bold"> Laura Tascón</h3>
                    <span className="text-primary">Full stack developer</span>
                </div>
            </section>
            <SeparatorLine widthLine={"90"} />
            <section className='py-[1rem] text-secondary px-[1rem]'>
                <div className='flex justify-between text-'><span>Age: </span><span>27</span></div>
                <div className='flex justify-between'><span>Residence: </span><span>Medellín-Colombia</span></div>
                <div className='flex justify-between'><span>Phone: </span><span>(+57) 310 356 45 26</span></div>
                <div className='flex justify-between'><span>Address: </span><span>Carrera 66 #101-36</span></div>
            </section>
        </div>
    )
}

export { PersonalInformation }