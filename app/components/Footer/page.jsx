
const Footer = () => {
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
    const categories = [
        {
            title: 'Adventures',
            count: 5
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
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    return (
        <div className="bg-gray-900 w-full">
            <div className="max-w-6xl mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex  gap-4 flex-col">
                        <h1 className="text-white text-6xl font-semibold font-dancing">Blaskan</h1>
                        <p className="text-sm text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias eligendi voluptatem corporis fugiat. Iusto ducimus doloremque ex dolorem! Facere eius adipisci expedita ab rem eaque corrupti modi voluptate in asperiores? Distinctio velit tempora, vitae laborum fugiat quaerat dolor tenetur nesciunt cumque voluptas veritatis, nisi est placeat? Doloremque provident facilis amet.</p>
                        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ducimus, omnis ipsam dolorem sequi repellat nulla perferendis magnam quisquam minima recusandae fuga, sed sit culpa esse excepturi. Officiis impedit facere culpa vitae quas laudantium necessitatibus ea perferendis adipisci vel ex pariatur laborum mollitia possimus animi ipsam beatae reprehenderit, doloribus amet!</p>
                    </div>
                    <div className="">
                        <div className='p-6 px-10 text-center'>
                            <h3 className='font-serif text-xl text-white mb-8'>Recent Posts</h3>
                            {
                                posts.map((post) => (
                                    <div className="text-start border-t py-3 border-gray-300">
                                        <h5 className='text-sm text-gray-400'>{post.title}</h5>
                                        <p className='text-sm text-white pt-2'>{post.date}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="">
                        <div className='p-6 px-10 '>
                            <h3 className='font-serif text-xl text-white mb-8 text-center'>Categories</h3>
                            {
                                categories.map((category) => (
                                    <div className="text-start border-t py-2 flex justify-between border-gray-300">
                                        <h5 className='text-sm text-gray-400'>{category.title}</h5>
                                        <p className='text-sm text-red-600 pt-2'>({category.count})</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="p-3">
                        <h2 className="border border-gray-700 w-full py-3 text-center text-white">July 2023</h2>
                        <div className="flex items-center justify-between mt-6 px-3">
                            {
                                days.map((day) => (
                                    <p className="text-md text-red-600">{day}</p>
                                ))
                            }
                        </div>
                        <div className="mt-10 flex items-center flex-wrap gap-1">
                            {[...Array(34)].map((_, index) => (
                                index < 3 ? <span className="p-2 w-10"></span> : <span key={index} className="p-2 w-10 border border-gray-400 text-gray-400 text-center">{index - 2}</span>
                            )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-400">
                <div className="max-w-6xl mx-auto py-4 flex justify-between">
                    <h3 className="text-gray-300 text-md flex-1"> Theme: Blaskan by Colorlib.com.</h3>
                    <p className="text-gray-300 px-3">Sitemap</p>
                    <p className="text-gray-300 px-3">Privacy Policy</p>
                    <p className="text-gray-300 px-3">Terms of use</p>
                </div>
            </div>
        </div>
    )
}

export default Footer