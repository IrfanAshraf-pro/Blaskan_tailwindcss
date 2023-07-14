import React from 'react'
import { Author, PostBottom } from '../PostComponents'
import Image from 'next/image'
import Banner from '../../assests/beach.jpg'

const Mainpost = () => {
    return (
        <>
            <div className='border-b pb-10 border-gray-300'>
                <div className='flex flex-col gap-8'>
                    <Author name={'Jane Smith'} date={'12 April, 2023'} />
                    <h2 className='font-serif font-medium text-3xl '>Explore new places every single day</h2>
                    <Image src={Banner} alt='Banner Image' className='object-cover h-fit' />
                    <p className='text-sm text-gray-500'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ea quisquam consequuntur eius commodi rerum accusamus nihil autem omnis consequatur. Suscipit, reiciendis incidunt corrupti aliquam alias accusantium ipsam. Repellat numquam atque quae in quaerat vitae rem dolore quam error, voluptas possimus sapiente corporis dignissimos suscipit quibusdam omnis ut cumque nam dicta, sed ex ratione ea veritatis. Impedit quae facere mollitia, cum sunt velit rerum cupiditate amet ad, obcaecati voluptas quo blanditiis dolore nemo nihil labore quis? Incidunt, sed doloremque nihil accusamus tempora autem, aut possimus quas aliquam dolor temporibus non ex! Alias adipisci explicabo cumque obcaecati, recusandae necessitatibus odit voluptatem.
                    </p>
                </div>
            </div>
            <div className='mt-10'>
                <PostBottom />
            </div>
        </>
    )
}

export default Mainpost