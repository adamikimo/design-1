// imports
import React from 'react';
import FooterLink from './FooterLink';
import '../styles/FooterIconLink.css';
import useFooterIconLinkImg from '../hooks/useFooterIconLinkImg';

// props interface
interface FooterIconLinkProps{
    icon: "phone" | "mail" | "position";
}

// component
const FooterIconLink: React.FC<FooterIconLinkProps> = ({ icon, children }) => {
    // calling the hook
    const img = useFooterIconLinkImg(icon);
    // JSX
    return (
        // icon footer link container
        <div
        className='FooterIconLink'
        >
            {/* icon */}
            <img 
                src={img?.img}
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