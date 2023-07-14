import React from 'react'

const Categories = () => {
    const categories = [
        {
            title: 'Adventures',
            count: 5
        },
        {
            title: 'Books',
            count: 1
        },
        {
            title: 'Cinema',
            count: 1
        },
        {
            title: 'City Breaks',
            count: 4
        },
        {
            title: 'Landscapes',
            count: 3
        },
        {
            title: 'Lifestyle',
            count: 6
        },
        {
            title: 'Travel',
            count: 5
        },
        {
            title: 'Uncategorized',
            count: 6
        },
    ]
    return (
        <div className='p-6 px-10 border border-gray-300 text-center'>
            <h3 className='font-serif text-xl text-black mb-8'>Categories</h3>
            {
                categories.map((category) => (
                    <div className="text-start border-t py-3 flex justify-between border-gray-300">
                        <h5 className='text-sm text-gray-700'>{category.title}</h5>
                        <p className='text-sm text-red-600 pt-2'>({category.count})</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Categories