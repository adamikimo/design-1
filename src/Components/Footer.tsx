// imports
import React from 'react';
import '../styles/Footer.css';
import FooterIconLink from './FooterIconLink';
import FooterLink from './FooterLink';
import FooterTitle from './FooterTitle';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';
import Linked_in from '../assets/linked-in.png';

// component
const Footer: React.FC = () => {
    // JSX
    return (
        <div
            className='Footer'
        >
            <div 
                className="footer-top"
            >
                <div 
                    className="footer-section-container"
                >
                    <FooterTitle>
                        Address
                    </FooterTitle>
                    <FooterTitle>
                        Comapny Name
                    </FooterTitle>
                    <FooterIconLink
                         icon="phone"
                    >
                        +977-981234567
                    </FooterIconLink>
                    <FooterIconLink
                         icon="mail"
                    >
                        Sales@mycompany.com
                    </FooterIconLink>
                    <FooterIconLink
                         icon="mail"
                    >
                        technical@myconpany.com
                    </FooterIconLink>
                </div>
                <div 
                    className="footer-section-container"
                >
                    <FooterTitle>
                        Our Services
                    </FooterTitle>
                    <FooterLink>
                        Marketing
                    </FooterLink>
                    <FooterLink>
                        Education
                    </FooterLink>
                    <FooterLink>
                        System development
                    </FooterLink>
                    <FooterLink>
                        Merge & Acquisiton
                    </FooterLink>
                </div>
                <div 
                    className="footer-section-container"
                >
                    <FooterTitle>
                        Links
                    </FooterTitle>
                    <FooterLink>
                        Projects
                    </FooterLink>
                    <FooterLink>
                        Our Team
                    </FooterLink>
                    <FooterLink>
                        Our Service
                    </FooterLink>
                    <FooterLink>
                        Blog
                    </FooterLink>
                </div>
                <div 
                    className="footer-section-container"
                >
                    <FooterTitle>
                        Town (Head Office)
                    </FooterTitle>
                    <FooterIconLink
                        icon="phone"
                    >
                        +977-981234567
                    </FooterIconLink>
                    <FooterIconLink
                        icon="position"
                    >
                        760 Market Street, floor 10 
                        San Francisco, CA, 94102
                    </FooterIconLink>
                </div>   
            </div>
            <div 
                className="footer-middle"
            >
                <FooterTitle>
                    Social Media
                </FooterTitle>
                <div 
                    className="social-icons"
                >
                    <img 
                        src={Facebook}
                        alt="" 
                    />
                    <img 
                        src={Instagram} 
                        alt="" 
                    />
                    <img 
                        src={Twitter} 
                        alt="" 
                    />
                    <img 
                        src={Linked_in} 
                        alt="" 
                    />
                </div>
            </div>
            <div 
                className="footer-bottom"
            >
                copyright, company@2021
            </div>
        </div>
    )
}

export default Footer;