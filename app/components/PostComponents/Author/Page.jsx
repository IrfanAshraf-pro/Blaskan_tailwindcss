import React from 'react'

const Author = ({ name, date }) => {
    return (
        <div className='flex items-center gap-2 max-w-xs'>
            <div className='w-10 bg-orange-600 h-[1px]'></div>
            <p className='text-orange-600  cursor-pointer'>by <span className='hover:text-orange-700'>{name}</span></p>
            <p className='text-gray-500 cursor-pointer'> - <span className='hover:text-orange-800'>{date}</span></p>
        </div>
    )
}

export default Author