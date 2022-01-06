import React from 'react';
import { Link } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import BallotIcon from '@mui/icons-material/Ballot';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import BuildIcon from '@mui/icons-material/Build';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle' style={{margin: 0}}>Your Files</h3>
                    <ul className='sidebarList'>
                        <Link underline='none' href={'/'}>
                            <li className='sidebarListItem'>
                                <HomeIcon className='sidebarIcon'/> Home
                            </li>
                        </Link>

                        <Link underline='none' href={'/yourfiles/resumes'}>
                            <li className='sidebarListItem'>
                                <AutoAwesomeMotionIcon className='sidebarIcon'/> My Resumes
                                </li>    
                        </Link>

                        <Link underline='none' href={'/yourfiles/cv'}>
                            <li className='sidebarListItem'>
                                <AutoAwesomeMotionIcon className='sidebarIcon'/> My Cover Letters
                            </li>    
                        </Link>
                            
                        <Link underline='none' href={'/yourfiles/applications'}>
                            <li className='sidebarListItem'>
                                <BallotIcon className='sidebarIcon'/> Applications
                            </li>    
                        </Link>
                            
                        <Link underline='none' href={'/yourfiles/savedjobs'}>
                            <li className='sidebarListItem'>
                                <BookmarksIcon className='sidebarIcon'/> Saved Job Listings
                            </li>    
                        </Link>        
                    </ul>
                    <h3 className='sidebarTitle' style={{margin: 0}}>Create New</h3>
                    <ul className='sidebarList'>
                        <Link underline='none' href={'/create/resume'}>
                            <li className='sidebarListItem'>
                                <BuildIcon className='sidebarIcon'/> Build a Resume
                            </li>
                        </Link>

                        <Link underline='none' href={'/create/cv'}>
                            <li className='sidebarListItem' style={{whiteSpace: "nowrap", overflow: "hidden"}}>
                                <BuildIcon className='sidebarIcon' /> Write a Cover Letter
                            </li>
                        </Link>
                    </ul>

                    <h3 className='sidebarTitle' style={{margin: 0}}>Search</h3>
                    <ul className='sidebarList'>
                        <Link underline='none' href={'/search/jobs'}>
                            <li className='sidebarListItem'>
                                <FindInPageIcon className='sidebarIcon'/> Explore Jobs
                            </li>
                        </Link>

                        <Link underline='none' href={'/search/companies'}>
                            <li className='sidebarListItem'>
                                <PersonSearchIcon className='sidebarIcon' /> Explore Companies
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;