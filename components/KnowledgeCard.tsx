import Image from 'next/image';
import React from 'react';
interface KnowledgeProps {
    icon: string;
    alt: string;
    knowledge: string;
    description: string;

}

function KnowledgeCard  ({ icon, knowledge, description, alt }: KnowledgeProps) {
    return (
        <section className="h-56 w-80 bg-white shadow-md flex items-center justify-center flex-col gap-4"  >
            <picture>
                <img src={icon} alt={alt}  className="h-[100px] max-w-full" />
            </picture>
            <div className="text-center mt-2">
                <h3 className="text-primary ">{knowledge}</h3>
                <p className="mt-2 text-secondary">{description}</p>
            </div>

        </section>
    

    );
};

export { KnowledgeCard };