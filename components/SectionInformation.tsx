interface sectionInformationProps {
    title: string,
    text: string,
    
}



function SectionInformation({ title, text}: sectionInformationProps) {
    
    return (
        <section>
            <div className="flex flex-col items-center">
                <h1 className="text-subtitle mt-[6%] ">{title}</h1>
                <span className="text-center p-[3%] w-[60%] text-secondary">
                    {text}
                </span>
            </div>
        </section>
    )
}

export { SectionInformation };

