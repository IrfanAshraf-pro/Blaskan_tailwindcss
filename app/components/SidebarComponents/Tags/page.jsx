import React from 'react'

const Tags = () => {
    const tags = ['Decor', 'Design', 'Dive', 'Furniture', 'Health', 'Learn', 'Run', 'Lifestyle', 'Materials', 'Natural', 'Supplies']
    return (
        <div className='p-6 px-10 border border-gray-300 text-center'>
            <h3 className='font-serif text-xl text-black mb-8'>Categories</h3>
            <div className='flex flex-wrap gap-3'>
                {
                    tags.map((tag) => (
                        <div className="text-sm text-gray-600 p-2 border border-orange-200 hover:bg-orange-500 hover:text-white">
                            {tag}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Tags