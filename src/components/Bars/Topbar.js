import React from 'react';

function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span>App Name goes here</span> 
                </div> 
                <div className='topRight'>
                    <span className=''>Icons {"(Settings, Notifs, Profile Pic)"}</span>
                </div>
            </div>
        </div>
    )
}

export default Topbar
