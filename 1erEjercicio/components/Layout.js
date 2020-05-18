import React from 'react'
import BannerTop from '../components/BannerTop'
import SidebarRight from '../components/SidebarRight'


const Layout = (props) => {
   
    return (
        <>
            <BannerTop />

            <div className="lay-sidebar">
                <div className="sidebar__main">
                    {props.children}
                </div>
                <SidebarRight />

            </div>
        </>
    )
}

export default Layout