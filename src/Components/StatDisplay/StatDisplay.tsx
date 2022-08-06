import React, { JSXElementConstructor, useState } from 'react'

interface StatDisplayProps {
    value: number | string,
    label: string
}
interface ChildrenProps {
    items: StatDisplayProps[]
}


const StatDisplay: React.FC<ChildrenProps> = (props) => {


    const renderStats = () => {
        if (props.items.length > 0) {
            return props.items.map((stat, index) => {
                return <div key={index}>
                    <span>{stat.label}</span>
                    <span>{stat.value}</span>
                </div>
            })
        } else {

            return <div >
                <span>No data</span>
                <span>No Data</span>
            </div>
        }
    }
    return (
        <div>
            {renderStats()}
        </div>
    )
}


export default StatDisplay