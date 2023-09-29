import Image from 'next/image'
import React from 'react'
import { SeparatorLine } from './separatorline'

function PersonalInformation() {
    return (
        <div>
            <section className="flex flex-col items-center">
                <div className="p-6">
                    <Image src="/images/perfil.jpg" alt="Fotografía de la desarrolladora full stack Laura Tascón" width={200} height={334} className="rounded-full" />
                </div>
                <div>
                    <h3 className="text-c"> Laura Tascón</h3>
                    <span className="text-b">Full stack developer</span>
                </div>
            </section>
            <SeparatorLine widthLine={"15%"} />
            <section>
                <div><span>Age: </span><span>27</span></div>
                <div><span>Residence: </span><span>BD</span></div>
                <div><span>Freelance: </span><span>Available</span></div>
                <div><span>Address: </span><span>Carrera 66 #101-36</span></div>
            </section>
        </div>
    )
}

export default PersonalInformation