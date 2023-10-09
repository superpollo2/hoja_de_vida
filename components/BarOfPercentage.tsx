interface percentageProps {
    text: String;
    percentage: number;

}
const BarOfPercentage = ({ text, percentage }: percentageProps) => {
    const width = `${percentage}%`;
    return (
        <section className="p-1">
            <section className='flex space-x-6  ' >
                <p className="text-secondary flex-1">{text}</p>
                <p className="text-secondary flex-1 text-right">{percentage} %</p>
            </section>
            <div className="flex items-center w-full h-3 rounded-lg border-solid border-2 border-black">
                <div style={{ width }} className="h-2 rounded-xl border-solid border-2 border-white bg-violet-400"></div>
            </div>


        </section>


    );
};

export { BarOfPercentage };