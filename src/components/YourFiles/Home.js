import React from "react";
import './Home.css';

function HomePage() {

    return (
        <div className="home">
           <div className='featured' >
                <div className='featuredItem'>
                    <span className="featuredTitle">Total Files Uploaded</span> 
                    <div className='featuredItemContainer'>
                        <div># of Cover Letters: 0</div>
                        <div># of Resumes: 0</div>
                    </div>
                </div>
                
                <div className='featuredItem'>
                    <span className="featuredTitle">Total Jobs Saved</span> 
                    <div className='featuredItemContainer'>
                        <div># of Jobs: 0</div>
                    </div>
                </div>  

                <div className='featuredItem'>
                    <span className="featuredTitle">Total Applications Sent</span> 
                    <div className='featuredItemContainer'>
                        <div># of Applications: 0</div>
                    </div>
                </div>
            </div> 
            <div className='featured'></div>
        </div>
        
    )
}

export default HomePage;