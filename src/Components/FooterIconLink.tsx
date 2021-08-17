// imports
import React from 'react';
import FooterLink from './FooterLink';
import '../styles/FooterIconLink.css';

// props interface
interface FooterIconLinkProps{
    icon: "phone" | "mail" | "position";
}

// component
const FooterIconLink: React.FC<FooterIconLinkProps> = ({ icon, children }) => {
    // JSX
    return (
        // icon footer link container
        <div
        className='FooterIconLink'
        >
            {/* icon */}
            <img 
                src={`/assets/${icon}.png`}
                alt=""
            />
            {/* rendering the children inside a footer link */}
            <FooterLink>
                {children}
            </FooterLink>
        </div>
    )
}

export default FooterIconLink;