import React, { useState } from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from "@material-ui/icons";
import { useStateVavlue } from './StateProvider';
import { IconButton } from '@material-ui/core';
import { Button } from './Button'
import { Link } from "react-router-dom";
import './SidebarRow.css'

function Sidebar() {
    const [{ user }, dispatch] = useStateVavlue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title='Covid Info Center' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <div className="sidebarRow">
                <ChatIcon/>
                <Button type="button" className='btn'><h5>Messenger</h5></Button>
            </div>
            <SidebarRow Icon={StorefrontIcon} title='MarketPlace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlined} title='MarketPlace' />
        </div>
    )
}

export default Sidebar
