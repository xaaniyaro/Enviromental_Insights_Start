import React from 'react';
import Box from '@material-ui/core/Box';

const DisplayMap = ({srcString}) => {
    if(srcString.length === 0){
        return null;
    }
    else{
        return(
            <div>
                <Box display="flex" justifyContent="center">   
                <iframe src={srcString} 
                title="StationLocation"
                width="100%" 
                height="600px" 
                frameBorder="0" 
                style={{border: 0}} 
                allowFullScreen="" 
                aria-hidden="false" 
                tabIndex="0"></iframe>
                </Box>
            </div>
        );
    }
}

export default DisplayMap;