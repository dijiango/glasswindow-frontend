import React from 'react';
import { Link } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import BallotIcon from '@mui/icons-material/Ballot';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle' style={{marginTop: 0}}>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <Link underline='none' href={'/'}>
                                <HomeIcon className='sidebarIcon'/> Home
                            </Link>
                            
                        </li>
                        <li className='sidebarListItem'>
                            <AutoAwesomeMotionIcon className='sidebarIcon'/> My Resumes and Cover Letters
                        </li>

                        <li className='sidebarListItem'>
                            <BallotIcon className='sidebarIcon'/> Applications
                        </li>
                        
                        <li className='sidebarListItem'>
                            <BookmarksIcon className='sidebarIcon'/> Saved Job Listings
                        </li>
                    </ul>
                        
                </div>
            </div>
        </div>
    )
}

export default Sidebar;