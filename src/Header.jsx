import React from 'react'
import { Route } from 'react-router-dom'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import FlagIcon from "@material-ui/icons/Flag"
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined"
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined"
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle"
import { Avatar } from '@material-ui/core'
import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useStateVavlue } from './StateProvider'
import { Button } from './Button'


function Header() {

    const [{ user }, dispatch] = useStateVavlue();
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt=""></img>
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>


            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontsize="large" />
                </div>

                <div className="header__option">
                    <ChatIcon fontsize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontsize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontsize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontsize="large" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton >
                    <ExitToAppIcon />
                </IconButton>

            </div>

        </div>
    )
}

export default Header
