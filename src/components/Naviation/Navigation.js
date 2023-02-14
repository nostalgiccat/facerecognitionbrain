import React from 'react'; 

// pure function since we will not use state for this component
const Navigation = () => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    );
}

export default Navigation; 