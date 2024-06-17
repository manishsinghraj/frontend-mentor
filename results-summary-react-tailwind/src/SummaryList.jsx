import React from 'react'

const SummaryList = ({ item, key }) => {
    return (
        <div className={`flex justify-between p-4 rounded-lg ${item.bgColor}`}>
            <div className='flex gap-2'>
                <img src={item.svg} alt={`${item.category} icon`} className="w-6 h-6" />
                <p className={`${item.textColor}`}>{item.category}</p>
            </div>
            <div>
                <span>{item.value}</span> <span className='opacity-60'>/ 100</span>
            </div>
        </div>
    )
}

export default SummaryList