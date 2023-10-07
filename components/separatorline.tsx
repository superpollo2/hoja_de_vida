interface separatorLineProps {
    widthLine: string,
}

const SeparatorLine = ({  widthLine }: separatorLineProps) => {
    const width = `${widthLine}%`;
    //const backgroundColor = `${color}%`;
    return (
        
       <section className="flex justify-center">
         <div style={{width}} className="h-0.5 bg-[#F0F0F6]"/>
       </section>
        


    );
};

export { SeparatorLine }