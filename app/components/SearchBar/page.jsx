"use client"
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className=''>
            <div class="relative py-2 px-5 ">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer py-2 px-5" onClick={() => setIsActive(!isActive)}>
                    <BsSearch className='w-4 h-4 text-orange-400' />
                </div>
                <div className="pr-2">
                    <input type="text" placeholder="Search..."
                        className={`bg-transparent text-sm duration-100 transition-opacity focus:outline-none w-full  border-b border-orange-700 `} />
                </div>
            </div>

        </div>
    )
}

export default SearchBar