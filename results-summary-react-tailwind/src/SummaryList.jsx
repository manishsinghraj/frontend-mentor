import React from 'react'

const SummaryList = ({ item, key }) => {
    return (
        <div className={`flex justify-between p-4 rounded-lg ${item.bgColor}`}>
            <div className='flex gap-2 items-center summary'>
                <img src={item.svg} alt={`${item.category} icon`} className="w-5 h-5" />
                <p className={`${item.textColor}`}>{item.category}</p>
            </div>
            <div className='summary'>
                <span>{item.value}</span> <span className='opacity-60'> / 100</span>
            </div>
        </div>
    )
}

export default SummaryList