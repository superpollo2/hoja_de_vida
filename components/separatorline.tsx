interface separatorLineProps {
    widthLine: string,
}

const SeparatorLine = ({  widthLine }: separatorLineProps) => {
    const width = `${widthLine}%`;
    //const backgroundColor = `${color}%`;
    return (
        <div style={{ width}} className="h-0.5 bg-[#F0F0F6] mt-4"/>
        


    );
};

export { SeparatorLine }