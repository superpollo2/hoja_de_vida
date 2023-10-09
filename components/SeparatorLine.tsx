interface separatorLineProps {
    widthLine: string,
}

function SeparatorLine ({  widthLine }: separatorLineProps)  {
    const width = `${widthLine}%`;
    //const backgroundColor = `${color}%`;
    return (
        
       <section className="flex justify-center">
         <div style={{width}} className="h-0.5 bg-[#aaaaaa]"/>
       </section>
        


    );
};

export { SeparatorLine }