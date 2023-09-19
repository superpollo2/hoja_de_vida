import { text } from "node:stream/consumers";

interface ExtraSkillsProps {
    text: string;

}
const ExtraSkills = ({  text }: ExtraSkillsProps) => {
    //const width = `${p}%`;
    return (
        <section className="flex justify-between gap-4">
            <div className="relative ">
                <div className="w-3 h-3  border-solid border-2 border-amber-500"/>
                <div className="w-3 h-3 absolute left-1 top-1.5 border-solid border-2 border-amber-500"/>
            </div>
            <div className="text-b">{text}</div>
        </section>

        


    );
};

export { ExtraSkills };