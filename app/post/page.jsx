import React from 'react'
import Mainpost from '../components/MainPost/page'
import { PostS } from '../components'
import Travel from '../assests/travel.jpg'
import Pool from '../assests/pool.jpg'
import Dress from '../assests/dress.jpg'
import Building from '../assests/building.jpg'
import { AiOutlineLeft } from 'react-icons/ai'
const Post = () => {
    const posts = [
        {
            author: 'Jane Smith',
            date: '20 April, 2022',
            image: Travel,
            title: 'Travel where you want',
        },
        {
            author: 'Jane Smith',
            date: '22 April, 2022',
            image: Pool,
            title: 'Explore new opportunities',
        },
        {
            author: 'Jane Smith',
            date: '26 April, 2022',
            image: Dress,
            title: 'Learn new things',
        },
        {
            author: 'Jane Smith',
            date: '29 April, 2022',
            image: Building,
            title: 'Go to the movies',
        },
    ]
    return (
        <div className='px-2 mb-10'>
            <Mainpost />
            <div className="grid grid-cols-1 mt-16 md:grid-cols-2 gap-8">
                {
                    posts.map((item, index) => (
                        <PostS author={item.author} date={item.date} image={item.image} title={item.title} key={index} />
                    ))
                }
            </div>
            <div className='flex items-center gap-2 text-gray-500 cursor-pointer hover:text-orange-700 mt-12'>
                <AiOutlineLeft className='w-3 h-3  ' />
                <span className='text-sm '>Older posts</span>
            </div>
        </div>
    )
}

export default Post