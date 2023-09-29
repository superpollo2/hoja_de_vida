import React from 'react'
import { BarOfPercentage } from './barpercentage'

type props = {
    barList: {
        text: string,
        percentage: number
    }[],
    title: string
    
}
function BarList({barList, title}: props) {
  return (
    <section className="p-3">
        <h3 className="text-c p-2">{title}</h3>
        {
            barList.map((percentage) => (
                <BarOfPercentage text={percentage.text} percentage={percentage.percentage} />
            ))
        }
    </section>
  )
}

export default BarList