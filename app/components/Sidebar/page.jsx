import React from 'react'
import { AboutAuthor, Categories, RecentPosts, Searchbar, Tags } from '../SidebarComponents'

const Sidebar = () => {
    return (
        <div className='flex flex-col gap-8'>
            <Searchbar />
            <AboutAuthor />
            <RecentPosts />
            <Categories />
            <Tags />
        </div>
    )
}

export default Sidebar