interface percentageProps {
    text: String;
    percentage: number;

}
const BarOfPercentage = ({ text, percentage }: percentageProps) => {
    const width = `${percentage}%`;
    return (
        <section className="p-2">
            <section className='flex space-x-6  ' >
                <p className="text-secondary flex-1">{text}</p>
                <p className="text-secondary flex-1 text-right">{percentage} %</p>
            </section>
            <div className="w-full h-3 rounded-lg border-solid border-2 border-black">
                <div style={{ width }} className="h-2 rounded-lg border-solid border-2 border-white bg-blue-500"></div>
            </div>


        </section>


    );
};

export { BarOfPercentage };