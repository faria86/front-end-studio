import React from 'react';

 const Spinner = ({children}) => {
    return (
        <div className='spinner-wrapper'>
            <div className='spinner-content' role="status">
                <span className="spinner-visual">Loading...</span>
            </div>
            <span className='spinner-chil'>{children}</span>
        </div>
    )
}

export default Spinner;