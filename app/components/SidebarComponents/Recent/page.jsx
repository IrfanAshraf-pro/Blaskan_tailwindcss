import React from 'react'


const RecentPosts = () => {
    const posts = [
        {
            author: 'Jane Smith',
            date: '20 April, 2022',
            title: 'Travel where you want',
        },
        {
            author: 'Jane Smith',
            date: '22 April, 2022',
            title: 'Explore new opportunities',
        },
        {
            author: 'Jane Smith',
            date: '26 April, 2022',
            title: 'Learn new things',
        },
        {
            author: 'Jane Smith',
            date: '29 April, 2022',
            title: 'Go to the movies',
        },
    ]
    return (
        <div className='p-6 px-10 border border-gray-300 text-center'>
            <h3 className='font-serif text-xl text-black mb-8'>Recent Posts</h3>
            {
                posts.map((post) => (
                    <div className="text-start border-t py-3 border-gray-300">
                        <h5 className='text-sm text-gray-700'>{post.title}</h5>
                        <p className='text-sm text-gray-600 pt-2'>{post.date}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default RecentPosts