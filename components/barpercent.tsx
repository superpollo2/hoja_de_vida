interface RectanguloProps {
    text: String;
    porcentaje: String;
    p: number;

}
const RectanguloConBordesRedondeados = ({ text, porcentaje, p }: RectanguloProps) => {
    const width = `${p}%`;
    return (
        <section >
            <section className='flex justify-between ' >
                <p className="text-b flex-1">{text}</p>
                <p className="text-b flex-1 text-right">{porcentaje} %</p>
            </section>
            <div className="w-64 h-3 rounded-lg border-solid border-2 border-black">
                <div style={{ width }} className="h-2 rounded-lg border-solid border-2 border-white bg-blue-500"></div>
            </div>


        </section>


    );
};

export { RectanguloConBordesRedondeados };