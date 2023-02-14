import React from 'react'; 
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'; 

// pure function since we will not use state for this component
const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 bg-white center' style={{width: '150px'}}>
                <div className='Tilt-inner pa3' >
                    <h1>
                        <img style={{paddingTop: '5px'}} alt='logo' src={brain}></img>
                    </h1>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo; 