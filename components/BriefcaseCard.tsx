import {FcNext} from "react-icons/fc"
import Image from 'next/image';
import React from 'react';

interface briefcaseProps {
    title: string,
    description: string,
    image: string,
    link: string,
    alt: string,
}
const BriefcaseCard = ({ title, description, image, alt, link }: briefcaseProps) => {
    return (
        <section className="flex flex-col space-y-2  w-[25%] bg-white  shadow-lg pb-8 mb-8">
            <picture className="pb-4"> 
                <img src={image} alt={alt} />
            </picture>
            <div className="text-left flex flex-col items-center px-[1rem]  space-y-3">
                <h3 className="text-primary">{title}</h3>
                <p className="text-secondary">{description}</p>
            </div>
            <div className="flex items-center px-[1rem] space-x-3">
                <div className="text-amber-300 font-bold text-lg  "><a href={link}>Learn More </a></div>
                <div><FcNext/></div>
                
            </div>
        </section >
    );
};

export { BriefcaseCard }