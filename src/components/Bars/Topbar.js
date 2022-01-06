import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span>App Name goes here</span> 
                </div> 
                <div className='topRight'>
                    <span className='topbarIcons'>
                        <span className='notifIcon'>
                            <IconButton><NotificationsIcon sx={{color: 'white'}}/></IconButton>
                        </span>
                        <span className='userIcon'>
                            <IconButton href='/user'><AccountCircleIcon sx={{color: 'white'}}/></IconButton>
                        </span>    
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Topbar
