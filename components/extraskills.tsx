

interface ExtraSkillsProps {
    text: string;

}

const ExtraSkills = ({  text }: ExtraSkillsProps) => {
    return (
        <section className="flex space-x-6 p-2">
            <div className="relative ">
                <div className="w-4 h-4  border-solid border-4 border-violet-400"/>
                <div className="w-4 h-4 absolute left-[40%] top-[25%] border-solid border-4 border-violet-400"/>
            </div>
            <div className="text-secondary">{text}</div>
        </section>

        


    );
};

export { ExtraSkills };