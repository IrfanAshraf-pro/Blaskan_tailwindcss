import React from 'react'
import { BiLogoFacebook, BiLogoLinkedin, BiLogoPinterestAlt } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'

const AboutAuthor = () => {
    return (
        <div className='p-10 border border-gray-300'>
            <div className="text-center flex flex-col gap-6">
                <h3 className='font-serif text-xl text-black '>About Author</h3>
                <hr />
                <div className=" flex gap-2 items-start text-gray-400">
                    <BiLogoFacebook className="w-4 h-4" />
                    <AiOutlineTwitter className="w-4 h-4" />
                    <BiLogoPinterestAlt className="w-4 h-4" />
                    <BiLogoLinkedin className="w-4 h-4" />
                </div>
            </div>
        </div>
    )
}

export default AboutAuthor