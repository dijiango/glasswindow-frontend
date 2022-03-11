import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Tooltip } from '@mui/material';

function StarRating({starsNum}) {

    const totalStars = 5;
    const activeStars = starsNum;
    
  return (
    <span>
        {
            [...new Array(totalStars)].map((arr, index)=>{
                return <Tooltip title={`employees rated working at this company ${activeStars} stars out of 5`}>{index < activeStars ? <StarRateIcon /> : <StarOutlineIcon />}</Tooltip>   
            })
        }
    </span>
  )
}

export default StarRating