// imports
import React from 'react';
import '../styles/FooterTitle.css';

// component
const FooterTitle: React.FC = ({ children }) => {
    // JSX
    return (
        // the footer title container
        <div
            className='FooterTitle'
        >
            {/* rendering the children */}
            {children}
        </div>
    )
}

export default FooterTitle;