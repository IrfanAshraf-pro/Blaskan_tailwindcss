import React from 'react'
import { SearchBar } from '..'
import { BiLogoFacebook, BiLogoLinkedin, BiLogoPinterestAlt } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'

const HeaderTop = () => {
    return (
        <div className='border-b border-gray-200'>
            <div className="my-10 max-w-6xl mx-auto ">
                <div className="flex flex-col items-center justify-end  md:flex-row gap-3">
                    <div className="">
                        <SearchBar />
                    </div>
                    <div className="flex items-center gap-8 ">
                        <div className=" flex gap-2 items-center">
                            <BiLogoFacebook className="w-4 h-4 hover:text-orange-500 cursor-pointer" />
                            <AiOutlineTwitter className="w-4 h-4   hover:text-orange-500 cursor-pointer" />
                            <BiLogoPinterestAlt className="w-4 h-4  hover:text-orange-500 cursor-pointer" />
                        </div>
                    </div>

                </div>
                <div className="mt-2 text-center">
                    <h1 className='font-bold font-dancing text-5xl'>Blaskan</h1>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop