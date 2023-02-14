import React from 'react'; 
import './ImageLinkForm.css';

// pure function since we will not use state for this component
const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5 bg-light-blue'>
                    <input className='f4 pa2 w-70 center' type='text' />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm; 