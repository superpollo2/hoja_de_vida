interface KnowledgeProps {
    icon: string;
    alt: string;
    knowledge: string;
    description: string;

}
const Knowledge = ({ icon, knowledge, description, alt }: KnowledgeProps) => {
    //const width = `${p}%`;
    return (
        <section className="h-56 w-80 bg-amber-200 flex items-center justify-center flex-col gap-4"  >
            <div>
                <img src={icon} alt={alt}  className="max-h-full max-w-full" />
            </div>
            <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">{knowledge}</h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>

        </section>


    );
};

export { Knowledge };