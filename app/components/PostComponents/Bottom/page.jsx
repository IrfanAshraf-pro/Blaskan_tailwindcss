import React from 'react'
import { BiLogoFacebook, BiLogoLinkedin, BiLogoPinterestAlt } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
const PostBottom = () => {
    return (
        <div className='w-full flex items-center justify-between'>
            <div className=" flex gap-2 items-center">
                <BiLogoFacebook className="w-4 h-4  hover:text-orange-500 cursor-pointer" />
                <AiOutlineTwitter className="w-4 h-4  hover:text-orange-500 cursor-pointer" />
                <BiLogoPinterestAlt className="w-4 h-4  hover:text-orange-500 cursor-pointer" />
                <BiLogoLinkedin className="w-4 h-4" />
            </div>
            <p className="flex items-center gap-3  cursor-pointer hover:text-orange-700">
                Continue reading
                <BsArrowRight className="w-4 h-4  hover:text-orange-500 cursor-pointer" />
            </p>
        </div>
    )
}

export default PostBottom