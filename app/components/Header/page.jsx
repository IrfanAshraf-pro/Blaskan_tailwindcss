import Image from 'next/image'
import React from 'react'
import HImage from '../../assests/custom-header.jpg'

const Header = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="">
                <Image src={HImage} alt='Header imge ' className='header-image md:header-image-lg object-cover ' />
            </div>
        </div>
    )
}

export default Header
