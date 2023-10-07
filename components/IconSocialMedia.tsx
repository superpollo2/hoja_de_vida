
import React from 'react';
import { IconType } from 'react-icons';
import * as icons from 'react-icons/fi';

interface socialMediaProps {
    iconName: string,
    link: string,
    relIcon: string,
}



function IconSocialMedia({ iconName, link, relIcon }: socialMediaProps) {
    const iconKey = `Fi${iconName}`; // Construye la clave del icono
    const IconComponent = icons[iconKey as keyof typeof icons] as IconType;
    return (
        <section className="">
            {IconComponent && (
                <div className='flex flex-center mt-[35%] rounded-full justify-center bg-blue-500 w-[55px] h-[60%] p-[20%]'>
                    <a href={link} target="_blank" rel={relIcon} className='text-[2rem]'>
                        <IconComponent  />
                    </a>
                </div>

            )}
        </section>
    )
}

export { IconSocialMedia };