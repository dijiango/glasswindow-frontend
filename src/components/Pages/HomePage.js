import React from "react";

function HomePage() {

    return (
        <div className="home">
           <div className='featured' >
                <div className='featuredItem'>
                    <span className="featuredTitle">Total Files Uploaded</span> 
                    <div className='featuredItemContainer'>
                        <div># of Cover Letters: </div>
                        <div># of Resumes: </div>
                    </div>
                </div>
                
                <div className='featuredItem'>
                    <span className="featuredTitle">Total Jobs Saved</span> 
                    <div className='featuredItemContainer'>
                        <div># of Jobs: </div>
                    </div>
                </div>  

                <div className='featuredItem'>
                    <span className="featuredTitle">Total Applications Sent</span> 
                    <div className='featuredItemContainer'>
                        <div># of Applications: </div>
                    </div>
                </div>
            </div> 
            <div className='featured'></div>
        </div>
        
    )
}

export default HomePage;