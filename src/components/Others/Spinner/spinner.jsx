import React from 'react';
import './spinner.scss';

 const Spinner = ({children}) => {
    return (
        <div className='spinner-wrapper'>
            <div className='spinner-content' role="status">
                <span className="spinner-visual">Loading Users...</span>
            </div>
            <span className='spinner-chil'>{children}</span>
        </div>
    )
}

export default Spinner;