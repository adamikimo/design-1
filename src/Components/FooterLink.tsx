// imports
import React from 'react';
import '../styles/FooterLink.css';

// component
const FooterLink: React.FC = ({ children }) => {
    // JSX
    return (
        // footer link container
        <div
            className='FooterLink'
        >
            {/* rendering the children */}
            {children}
        </div>
    )
}

export default FooterLink;