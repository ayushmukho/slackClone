import React from 'react';

import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import './header.styles.css';
import { useStateValue } from '../../StateProvider';

function Header() {
    const [{user}] =useStateValue();

    return (
        <div className='header'>
            <div className="header__left">
                
                {/* Avatar for logged in user */}
                <Avatar 
                    className='header__avatar'
                    alt={user?.displayname}
                    src={user?.photoURL}
                />
                {/* Time icon */}
                <AccessTimeIcon/>
        
            </div>
                
            <div className="header__search">
                {/* search icon */}
                <SearchIcon />
                
                {/* input */}
                <input placeholder="Search" />

            </div>

            <div className="header__right">
                {/* help icon */}
                <HelpOutlineIcon />

            </div>
        
        </div>
    )
}

export default Header;
