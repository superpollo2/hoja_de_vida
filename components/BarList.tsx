import React from 'react'
import { BarOfPercentage } from './BarOfPercentage'

type props = {
    barList: {
        id: number,
        text: string,
        percentage: number
    }[],
    title: string

}
function BarList({ barList, title }: props) {
    return (
        <section className="p-[5%]">
            <h3 className="text-primary p-2">{title}</h3>
            {
                barList.map((percentage) => (
                    <BarOfPercentage key={percentage.id} text={percentage.text} percentage={percentage.percentage} />
                ))
            }
        </section>
    )
}

export { BarList }