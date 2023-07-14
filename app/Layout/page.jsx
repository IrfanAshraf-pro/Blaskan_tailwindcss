import React from 'react'
import Post from '../post/page'
import { Sidebar } from '../components'
const Layout = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 ite'>
            <div className="md:col-span-7">
                <Post />
            </div>
            <div className="md:col-span-1 "></div>
            <div className="md:col-span-4 px-2">
                <Sidebar />
            </div>
        </div>
    )
}

export default Layout