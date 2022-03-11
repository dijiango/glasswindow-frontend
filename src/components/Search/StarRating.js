import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function StarRating({starsNum}) {

    const totalStars = 5;
    const activeStars = starsNum;
    
  return (
    <span>
        {
            [...new Array(totalStars)].map((arr, index)=>{
                return index < activeStars ? <StarRateIcon /> : <StarOutlineIcon />   
            })
        }
    </span>
  )
}

export default StarRating